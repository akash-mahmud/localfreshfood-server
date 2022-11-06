const express = require('express');
const { customerRegister, customerLogin, vendorRegister, vendorLogin, auth, authAdmin } = require('../controllers/AuthController');
const isAuthenticate = require('../middlewares/jwtAuth');
const tokenCheck = require('../middlewares/userCheck');
const router = express.Router();


// router.post('/vendor-register', vendorRegister );

router.post("/vendor-login" , vendorLogin);
router.post("/customer-register", customerRegister);
router.post("/customer-login" , customerLogin);
router.get("/auth", tokenCheck, isAuthenticate, auth);
router.get("/auth/admin",  isAuthenticate, authAdmin);
module.exports = router;
