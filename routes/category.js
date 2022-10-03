const express = require('express');
const router = express.Router();
const {createCategory , getCategory , deleteCategory , editCategory} = require('../controllers/category')

router.get("/category", getCategory);
router.post("/category", createCategory);
router.patch("/category/:id", editCategory);
router.delete("/category/:id", deleteCategory);

module.exports = router;
