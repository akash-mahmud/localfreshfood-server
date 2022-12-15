exports.singleImageUpload = async (req, res, next) => {
    try {
        const image = "/media/uploads/" + req.file.filename;
        return res.json({
          message: "success",
          url: image,
        });
  } catch (error) {}
};

exports.multipleImageUpload = async (req, res, next) => {
  try {
  } catch (error) {}
};