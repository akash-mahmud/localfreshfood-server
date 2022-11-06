"use strict";
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const tokenCheck = async (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      const authToken = req.headers.authorization.split(" ")[1];
      //  console.log(authToken);

      const data = jwt.verify(authToken, process.env.JWT_SECRET);

      const user = await User.findOne({
        where: {
          id: data.user.id,
        },
      });
      req.user = user.dataValues;
    }

    next();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = tokenCheck;
