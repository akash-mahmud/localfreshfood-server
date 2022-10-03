const express = require('express');
const router = express.Router();


const {
  createSubCategory,
  editSubCategory,
  deleteSubCategory,
  getSubCategory,
} = require("../controllers/subCategory");

router.get("/subcategory", getSubCategory);
router.post("/subcategory", createSubCategory);
router.patch("/subcategory/:id", editSubCategory);
router.delete("/subcategory/:id", deleteSubCategory);

module.exports = router;
