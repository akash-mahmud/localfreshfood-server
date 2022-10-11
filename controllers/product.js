const { Product } = require("../models");
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
      mainCategoryId,
    } = request.body;
    await Product.create({
      name,
      images,

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
    return resposnce.json({
      message: "success",
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
