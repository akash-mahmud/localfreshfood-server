'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      // id:  DataTypes.UUID,
      first_name:  DataTypes.STRING,
      last_name:  DataTypes.STRING,
      user_type:  DataTypes.STRING,
      phone:  DataTypes.STRING,
      email:  DataTypes.STRING,

      password:  DataTypes.STRING,
      address:  DataTypes.STRING,
      county:  DataTypes.STRING,
      country:  DataTypes.STRING,
      postcode:  DataTypes.STRING,
      resetPasswordToken:  DataTypes.STRING,
      resetPasswordExpires:  DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};