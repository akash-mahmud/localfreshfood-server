"use strict";

const auth = (req, res, next) => {

  if (!req.isAuthenticated()) {
    return res.status(401).json({
      unauthorized: true,
    });
  }

  next();
};

module.exports = auth;
