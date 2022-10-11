const express = require('express');
const { customerRegister, customerLogin, vendorRegister, vendorLogin } = require('../controllers/AuthController');
const router = express.Router();


router.post('/vendor-register', vendorRegister );

router.post("/vendor-login" , vendorLogin);
router.post("/customer-register", customerRegister);
router.post("/customer-login" , customerLogin);

module.exports = router;
