'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MainCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MainCategory.init(
    {
      // id: DataTypes.UUID,
      name: DataTypes.STRING,
      pageTitle: DataTypes.STRING,
      pageDesc: DataTypes.STRING,
      tags: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MainCategory",
    }
  );
  return MainCategory;
};