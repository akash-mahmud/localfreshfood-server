const express = require('express');
const router = express.Router();


const {
  createMainCategory,
  editMainCategory,
  deleteMainCategory,
  getMainCategory
} = require("../controllers/mainCategory");

router.get("/maincategory", getMainCategory);
router.post("/maincategory", createMainCategory);
router.patch("/maincategory/:id", editMainCategory);
router.delete("/maincategory/:id", deleteMainCategory);

module.exports = router;
