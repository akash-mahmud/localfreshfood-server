"use strict";

const { User } = require("../models");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },

    async function (email, password, done) {
      const user = await User.findOne({ where: { email: email } });

      console.log("hi");
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        return done(null, false, { message: "Incorrect password." });
      }

      return done(null, user);
    }
  )
);

passport.serializeUser(function (user, done) {
  console.log("serializing");
  console.log(user.id);
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  const user = await User.findOne({ where: { id } });


  done(null, user);
});

module.exports = passport;
