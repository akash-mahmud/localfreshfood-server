'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reveiw extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reveiw.init(
    {
      // id:  DataTypes.UUID,
      comment:  DataTypes.STRING,
      rating_count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reveiw",
    }
  );
  return Reveiw;
};