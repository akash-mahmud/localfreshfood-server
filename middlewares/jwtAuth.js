"use strict";

const isAuthenticate = (req, res, next) => {

  if (!req.user) {
    return res.status(401).json({
      unauthorized: true,
    });
  }

  next();
};

module.exports = isAuthenticate;
