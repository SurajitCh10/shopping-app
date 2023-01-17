const { user } = require("../models");
const logger = require("../src/logger");

const checkEmail = (req, res, next) => {
  user
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((user) => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!!",
        });
        logger.error(
          "Failed! Email is already in use!!. API request - email: " +
            req.body.email +
            " password: " +
            req.body.password
        );
        return;
      }
      next();
    });
};

module.exports = checkEmail;
