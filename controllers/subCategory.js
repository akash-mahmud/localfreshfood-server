const { SubCategory } = require("../models");
exports.createSubCategory = async (request, resposnce) => {
  try {
    const { name, isMainCategoryItem, mainCategoryId, categoryId } =
      request.body;
    await SubCategory.create({
      name,
      isMainCategoryItem,
      mainCategoryId,
      categoryId,
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

exports.editSubCategory = async (request, resposnce) => {
  try {
    const subCategory = await SubCategory.findOne({
      where: {
        id: request.params.id,
      },
    });
    if (!subCategory) {
      return resposnce.json({
        message: "not exist",
      });
    }
    const { name, isMainCategoryItem, mainCategoryId, categoryId } =
      request.body;
    await subCategory.update({
      name,
      isMainCategoryItem,
      mainCategoryId,
      categoryId,
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

exports.deleteSubCategory = async (request, resposnce) => {
  try {
    await SubCategory.destroy({ where: { id: request.params.id } });
    return resposnce.json({
      message: "success",
    });
  } catch (error) {
    return resposnce.json({
      message: error.message,
    });
  }
};

exports.getSubCategorys = async (request, resposnce) => {
  try {
  } catch (error) {
    return resposnce.json({
      message: error.message,
    });
  }
};

exports.getSubCategory = async (request, resposnce) => {
  try {
  } catch (error) {
    return resposnce.json({
      message: error.message,
    });
  }
};
