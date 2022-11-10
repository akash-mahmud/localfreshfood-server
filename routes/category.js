const express = require('express');
const router = express.Router();
const {createCategory , getCategory , deleteCategory , editCategory} = require('../controllers/category');
const auth = require('../middlewares/auth');

router.get("/", getCategory);
router.post("/",auth, createCategory);
router.patch("/:id",auth, editCategory);
router.delete("/:id",auth, deleteCategory);

module.exports = router;
