const { Product } = require("../models");
const { getPagingData } = require("../helpers/getPagingData");
const { getPagination } = require("../helpers/pagination");
exports.createProduct = async (request, resposnce) => {
  try {
    const {
      name,
      images,

      description,
      price,
      sku,
      isMainCategoryItem,
      categoryId,
      subCatgoryId,
      mainCategoryId,pageTitle, pageDesc, tags
    } = request.body;
    await Product.create({
      name,
      images,
pageTitle, pageDesc, tags,
      description,
      price,
      sku,
      isMainCategoryItem,
      userId: request.user.id,
      categoryId,
      subCatgoryId,
      mainCategoryId,
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

exports.editProduct = async (request, resposnce) => {
  try {
    const { id } = request.params;
    const product = await Product.findOne({
      where: {
        id,
      },
    });
    if (!product) {
      return resposnce.json({
        message: "doesn't exist",
      });
    }
    const {
      name,
      images,

      description,
      price,
      sku,
      isMainCategoryItem,
      categoryId,
      subCatgoryId,
      mainCategoryId,
      pageTitle,
      pageDesc,
      tags,
    } = request.body;
    await product.update({
      name,
      images,

      description,
      price,
      sku,
      isMainCategoryItem,

      categoryId,
      subCatgoryId,
      mainCategoryId,
      pageTitle, pageDesc, tags
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

exports.deleteProduct = async (request, resposnce) => {
  try {
    const { id } = request.params;
    const deletedProduct = await Product.destroy({ where: { id: id } });
    return resposnce.json({
      message: "success",
      deletedProduct,
    });
  } catch (error) {
    return resposnce.json({
      message: error.message,
    });
  }
};

exports.getProducts = async (request, resposnce) => {
  try {
        const { page, size } = request.query;
        const { limit, offset } = getPagination(page, size);
        const products = await Product.findAndCountAll({
          order: [["createdAt", "DESC"]],
          limit,
          offset,
        });
        const responseData = getPagingData(products, page, limit, "products");
        return resposnce.json({
          message: "success",
          paginatedData: responseData,
        });

  } catch (error) {
    return resposnce.json({
      message: error.message,
    });
  }
};

exports.getProduct = async (request, resposnce) => {
  try {
    const product = await Product.findOne({
      where: {
        id: request.params.id,
      },
    });
    if (!product) {
      return resposnce.json({
        message: "doesn't exist",
      });
    }
    return resposnce.json({
      message: "success",
      product,
    });
  } catch (error) {
    return resposnce.json({
      message: error.message,
    });
  }
};
