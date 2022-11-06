"use strict";
const types = require("../constants/userTypes");

const isVendor = async (req, res, next) => {
  try {
      if (req.user && req.user.user_type !== types.VENDOR) {
          return res.status(404).json({
              unAuthorized: true,
              message:'unauthorized request'
    })
}

    next();
  } catch (error) {
          return res.status(404).json({
message:error.mrssage
          });
  }
};

module.exports = isVendor;
