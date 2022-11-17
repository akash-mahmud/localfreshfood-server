const { getPagingData } = require("../helpers/getPagingData");
const { getPagination } = require("../helpers/pagination");
const { Category } = require("../models");
exports.createCategory = async (request, resposnce) => {
  try {
    if (!request.body.name) {
      return resposnce.json({
        message: "category name is required",
      });
    }
    const { name, pageTitle, pageDesc, tags } = request.body;
    await Category.create({
      name,
      pageTitle,
      pageDesc,
      tags,
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

exports.editCategory = async (request, resposnce) => {
  try {
    if (!request.body.name) {
      return resposnce.json({
        message: "category name is required",
      });
    }
    const category = await Category.findOne({
      where: { id: request.params.id },
    });
    if (!category) {
      return resposnce.json({
        message: "category does not exist",
      });
    }
      const { name, pageTitle, pageDesc, tags } = request.body;
    await category.update({
      name,
      pageTitle,
      pageDesc,
      tags,
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

exports.deleteCategory = async (request, responsce) => {
  const { id } = request.params;
  try {
    const deletedCategory = await Category.destroy({ where: { id: id } });
    return responsce.json({
      message: "success",
      deletedCategory,
    });
  } catch (error) {
    return responsce.json({
      message: error.message,
    });
  }
};

exports.getCategory = async (request, resposnce) => {
  try {
    const { page, size } = request.query;
    const { limit, offset } = getPagination(page, size);
        const category = await Category.findAndCountAll({
          order: [["createdAt", "DESC"]],
          limit,
          offset,
        });
    const responseData = getPagingData(category, page, limit, 'categories');
        return resposnce.json({
          message: "success",
          paginatedData: responseData,
        });
  } catch (error) {
    return resposnce.send(error.message);
  }
};
