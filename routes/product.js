const express = require('express');
const router = express.Router();


const {
  createProduct,
  editProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/product");

router.get("/product", getProduct);
router.post("/product", createProduct);
router.patch("/product/:id", editProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
