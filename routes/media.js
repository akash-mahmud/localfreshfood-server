const express = require("express");
const router = express.Router();
const upload = require('../utils/multer')
const {
    singleImageUpload,
    multipleImageUpload
} = require("../controllers/media");
const auth = require("../middlewares/auth");


router.post("/upload/single", auth,upload.single('image'), singleImageUpload);
router.post("/upload/multiple", auth,upload.array('images') , multipleImageUpload);


module.exports = router;
