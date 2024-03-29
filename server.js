"use-strict";
require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const router = require("./routes");
const cors = require("cors");
const app = express();
const database = require('./models')
const main = async () => {

  //Middlewares
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(
    cors({
      credentials: true,
      origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
        "http://localhost:3000",
        "https://www.localfreshfoods.co.uk",
        "https://admin.localfreshfoods.co.uk",
        "https://api.localfreshfoods.co.uk",
      ],
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
  app.use("/media/uploads", express.static("uploads"));
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  //database 
  database.sequelize.sync().then(function () {
    console.log("database connected");
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
}

main()
module.exports = app;
