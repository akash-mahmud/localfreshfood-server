const express = require('express');
const router = express.Router();


const {
  createMainCategory,
  editMainCategory,
  deleteMainCategory,
  getMainCategory
} = require("../controllers/mainCategory");
const auth = require('../middlewares/auth');

router.get("/", getMainCategory);
router.post("/",auth, createMainCategory);
router.patch("/:id",auth, editMainCategory);
router.delete("/:id",auth, deleteMainCategory);

module.exports = router;
