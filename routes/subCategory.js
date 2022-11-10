const express = require('express');
const router = express.Router();


const {
  createSubCategory,
  editSubCategory,
  deleteSubCategory,
  getSubCategory,
} = require("../controllers/subCategory");
const auth = require('../middlewares/auth');

router.get("/", getSubCategory);
router.post("/",auth, createSubCategory);
router.patch("/:id",auth, editSubCategory);
router.delete("/:id", auth, deleteSubCategory);

module.exports = router;
