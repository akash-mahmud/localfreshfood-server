"use strict";

const auth = (req, res, next) => {
  console.log(req.session);
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      unauthorized: true,
    });
  }

  next();
};

module.exports = auth;
