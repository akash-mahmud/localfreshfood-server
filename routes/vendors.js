const express = require('express');
const router = express.Router();


const {
  createVendor,
  editVendor,
  deleteVendor,
  getVendor,
} = require("../controllers/vendors");

router.get("/vendor", getVendor);
router.post("/vendor", createVendor);
router.patch("/vendor/:id", editVendor);
router.delete("/vendor/:id", deleteVendor);

module.exports = router;
