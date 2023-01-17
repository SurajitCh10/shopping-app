const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

const path = require("path");
const fs = require("fs");
const formidable = require("formidable");

const { user } = require("../models");
const checkEmail = require("../middleware/verifySignup");
const authUser = require("../middleware/authUser");
const uploadFile = require("../middleware/upload");
const expressWinston = require("express-winston");
const { transports, format } = require("winston");

const pool = require("./database");

const router = new express.Router();
const logger = require("./logger");

app.use(
  expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true,
  })
);

router.post("/register", checkEmail, async (req, res) => {
  try {
    const token = uuidv4();

    user
      .create({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
        token,
      })
      .catch((e) => {
        if (e) console.log(e);
      });
    res.status(201).send({ message: "Registered !!", token });
    logger.info(
      "Registered. API Response - " +
        "token: " +
        token +
        " message: Registered !!" +
        " . API request - name: " +
        req.body.name +
        " email: " +
        req.body.email +
        " address: " +
        req.body.address +
        " password: " +
        req.body.password +
        " token: " +
        token
    );
  } catch (e) {
    logger.error("Error in register . API Error - " + e.message);
    res.status(404).send(e.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    // const User = await user.findOne({
    //     where: {
    //         email: req.body.email
    //     }
    // });

    const sqlQuery = "SELECT * FROM users WHERE email=?";
    const User = await pool.query(sqlQuery, req.body.email);

    if (User) {
      if (req.body.password === User[0].password) {
        const token = uuidv4();

        user.update(
          {
            token,
          },
          {
            where: {
              email: req.body.email,
            },
          }
        );

        const check_admin = 1 ? User[0].admin : 0;

        res.status(200).send({
          message: "Logged In !!",
          token,
          name: User[0].name,
          admin: check_admin,
        });
        logger.info(
          "Logged in. API Response - " +
            "token: " +
            token +
            " message: Logged In !!" +
            " name: " +
            User[0].name +
            " admin: " +
            check_admin +
            " . API request - email: " +
            req.body.email +
            " password: " +
            req.body.password
        );
      } else {
        res.status(400).send({ message: "Password Incorrect !!" });
        logger.error(
          "Incorrect Password. API request - " +
            "Email " +
            req.body.email +
            " Password: " +
            req.body.password
        );
      }
    } else {
      res.status(404).send({ message: "User does not exist !!" });
      logger.error(
        "User does not exist. API request - email: " +
          req.body.email +
          " password: " +
          req.body.password
      );
    }
  } catch (e) {
    logger.error("Error in login . API Error - " + e.message);
    res.status(400).send(e.message);
  }
});

router.post("/logout", authUser, async (req, res) => {
  try {
    user.update(
      {
        token: null,
      },
      {
        where: {
          // token: req.header('Authorization').replace('Bearer ', '')
          token: req.body.token,
        },
      }
    );
    logger.info("User Logged out. API request - token: " + req.body.token);
    res.status(200).send({ message: "Logged Out !!" });
  } catch (e) {
    logger.error("API error in logout- " + e.message);
    res.status(400).send(e.message);
  }
});

router.post("/upload", async (req, res) => {
  var fileName;

  try {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      var oldPath = files.file.filepath;
      var newPath =
        path.join(__dirname, "assets") + "/" + files.file.originalFilename;
      var rawData = fs.readFileSync(oldPath);

      fs.writeFile(newPath, rawData, (err) => {
        if (err) console.log(err);

        const sqlQuery = "INSERT INTO assets (name, path) VALUES (?, ?)";
        pool.query(sqlQuery, [files.file.originalFilename, newPath]);

        fileName = files.file.originalFilename;

        logger.info("File uploaded . name - " + files.file.originalFilename);
        return res.send("Successfully uploaded");
      });
    });
  } catch (e) {
    logger.error(
      "API Error in file upload- " + e.message + ". name: " + fileName
    );
    res.status(400).send(e.message);
  }
});

router.get("/view", async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM assets";
    const result = await pool.query(sqlQuery);

    res.status(200).send(result);

    // logger.info("File viewed . API Response - " + result);
  } catch (e) {
    logger.error("API Error in file view- " + e.message);
    res.status(400).send(e.message);
  }
});

module.exports = router;
