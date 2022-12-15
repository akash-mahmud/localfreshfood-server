const express = require('express');
const router = express.Router();


const {
  createProduct,
  editProduct,
  deleteProduct,
  getProduct,
  getProducts,
} = require("../controllers/product");
const auth = require('../middlewares/auth');

router.get("/", getProducts);
router.post("/",auth, createProduct);
router.patch("/:id",auth, editProduct);
router.delete("/:id",auth, deleteProduct);

module.exports = router;
