"use strict";

const { Admin } = require("../models");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },

    async function (email, password, done) {
      const admin = await Admin.findOne({ where: { email: email } });

      console.log("hi");
      if (!admin) {
        return done(null, false, { message: "Incorrect adminname." });
      }
      const valid = await bcrypt.compare(password, admin.password);

      if (!valid) {
        return done(null, false, { message: "Incorrect password." });
      }

      return done(null, admin);
    }
  )
);

passport.serializeUser(function (admin, done) {
  console.log("serializing");
  console.log(admin.id);
  done(null, admin.id);
});

passport.deserializeUser(async function (id, done) {
  const admin = await Admin.findOne({ where: { id } });

  // if (!admin) {
  //   done(err, user);
  // }
  done(null, admin);
});

module.exports = passport;
