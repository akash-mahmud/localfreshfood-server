const express = require('express');
const router = express.Router();


const {
  createProduct,
  editProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/product");
const auth = require('../middlewares/auth');

router.get("/", getProduct);
router.post("/",auth, createProduct);
router.patch("/:id",auth, editProduct);
router.delete("/:id",auth, deleteProduct);

module.exports = router;
