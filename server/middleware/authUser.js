const { user } = require("../models");
const logger = require("../src/logger");

const authUser = async (req, res, next) => {
  try {
    // const token = req.header('Authorization').replace('Bearer ', '');
    const token = req.body.token;

    user
      .findOne({
        where: {
          token,
        },
      })
      .then((user) => {
        if (user) {
          next();
          return;
        }

        logger.error("Please authenticate. API request - " + token);
        res.status(401).send({
          message: "Please authenticate !!",
        });
      });
  } catch (e) {
    logger.error("Log out failed.");
    res.status(400).send({ message: "Logout failed !!" });
  }
};

module.exports = authUser;
