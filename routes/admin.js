const express = require('express');
const router = express.Router();
const passportLocal = require("../middlewares/passportLocal");
const {
  login, 
  AdminRegister
} = require("../controllers/admin");

router.post("/login", passportLocal.authenticate("local"), login);
router.post("/register", AdminRegister);

module.exports = router;
