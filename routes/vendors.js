const express = require('express');
const router = express.Router();


const {
  createVendor,
  editVendor,
  deleteVendor,
  getVendor,
  getVendors,
} = require("../controllers/vendors");

router.get("/", getVendors);
router.post("/", createVendor);
router.patch("/:id", editVendor);
router.delete("/:id", deleteVendor);

module.exports = router;
