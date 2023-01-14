'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vendor.init(
    {
      id:  DataTypes.UUID,

      store_name:  DataTypes.STRING,
        

      full_name_of_vendor:  DataTypes.STRING,
      email:  DataTypes.STRING,
      phone:  DataTypes.STRING,
      address:  DataTypes.STRING,

      county:  DataTypes.STRING,
      country:  DataTypes.STRING,
      postcode:  DataTypes.STRING,
      location:  DataTypes.JSON,
      description:  DataTypes.TEXT,
      social_media:  DataTypes.JSON,

      policies:  DataTypes.JSON,
      vendor_logo:  DataTypes.STRING,
      pageTitle:  DataTypes.STRING,
      pageDesc:  DataTypes.STRING(400),
       
      tags:  DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Vendor",
    }
  );
  return Vendor;
};