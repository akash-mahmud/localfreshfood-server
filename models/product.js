"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      // id: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,

      name: DataTypes.STRING,

      images: DataTypes.ARRAY(DataTypes.STRING),

      description: DataTypes.TEXT,

      price: DataTypes.REAL,

      sku: DataTypes.STRING,
      isMainCategoryItem: DataTypes.BOOLEAN,

      pageTitle: DataTypes.STRING,
      pageDesc: DataTypes.STRING,
      tags: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
