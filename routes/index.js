const express = require('express');
const router = express.Router();
const adminRouter = require('./admin')
const categoryRouter = require('./category')
const mainCategoryRouter = require('./mainCategory')
const productsRouter = require('./product')
const reveiwsRouter = require('./reveiws')
const subCategoryRouter = require('./subCategory')
const userRouter = require('./user')
const vendorRouter = require('./vendors')
const mediaRouter = require("./media");
const sellerRouter = require("./seller");

router.get('/', function(req, res, next) {
  return res.status(200).json({
   message : '🚀Api is runny🚶‍♂️ '
 })
});

router.use('/admin',adminRouter);
router.use('/category',categoryRouter);
router.use('/mainCategory',mainCategoryRouter);
router.use('/product',productsRouter);
router.use('/reveiw',reveiwsRouter);
router.use('/subCategory',subCategoryRouter);
router.use('/user',userRouter);
router.use('/vendor',vendorRouter);
router.use("/media", mediaRouter);
router.use("/seller", sellerRouter);

module.exports = router;
