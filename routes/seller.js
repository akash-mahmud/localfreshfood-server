const express = require("express");
const router = express.Router();

const {
getSellers
} = require("../controllers/seller");
const auth = require("../middlewares/auth");

router.get("/", auth, getSellers);


module.exports = router;
