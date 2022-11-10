const { MainCategory } = require("../models");
exports.createMainCategory = async (request, resposnce) => {
  try {
    const { name ,pageTitle, pageDesc, tags } = request.body;
    await MainCategory.create({
      name,pageTitle, pageDesc, tags
    });
    return resposnce.json({
      message: "success",
    });
  } catch (error) {
       return resposnce.json({
         message: error.message,
       });
  }
};

exports.editMainCategory = async (request, resposnce) => {
  try {
    const { name, pageTitle, pageDesc, tags } = request.body;
    const { id } = request.params;
    const mainCategory = await MainCategory.findOne({
      where: {
        id,
      },
    });

    if (!mainCategory) {
      return resposnce.json({
        message: "not exist",
      });
    }

    await mainCategory.update({
      name,
      pageTitle,
      pageDesc,
      tags,
    });
    return resposnce.json({
      message: "success",
    });
  } catch (error) {}
};

exports.deleteMainCategory = async (request, resposnce) => {
  try {
    await MainCategory.destroy({ where: { id: request.params.id } });
    return resposnce.json({
      message: "success",
    });
  } catch (error) {}
};

exports.getMainCategory = async (request, resposnce) => {
  try {
  } catch (error) {}
};
