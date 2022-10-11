const { MainCategory } = require("../models");
exports.createMainCategory = async (request, resposnce) => {
  try {
    const { name } = request.body;
    await MainCategory.create({
      name,
    });
    return resposnce.json({
      message: "success",
    });
  } catch (error) {}
};

exports.editMainCategory = async (request, resposnce) => {
  try {
    const { name } = request.body;
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
