"use-strict";
require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const database = require("./models");
const router = require("./routes");
const cors = require("cors");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [],
  })
);
app.use(cookieParser());
app.use(
  session({
    secret: "localfreshfoods",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.use("/api", router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  return res.json({
    message: "Not found",
  });
});

module.exports = app;
