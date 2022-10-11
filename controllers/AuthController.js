const { hashPassword } = require("../helpers/hashPassword");
const { User } = require("../models");
const types = require('../constants/userTypes')
exports.customerRegister = async (req, res) => {
  try {

    const { first_name, last_name, email, password } = req.body;
    const exist = await User.findOne({
      where: {
        email: email,
      },
    });

    if (exist) {
      return res.json({
        message: 'Already exist'
      })
    }
    const passWodHash = await hashPassword(password)

    await User.create({
      first_name,
      last_name,
      email,
      password: passWodHash,
      user_type: types.CUSTOMER,
    });
          return res.json({
            message: "success",
          });
  } catch (error) {
          return res.json({
            message: error.message,
          });
  }
};
exports.customerLogin = async (req, res) => {
  try {
    
  } catch (error) {}
};
exports.vendorRegister = async (req, res) => {
  try {
  } catch (error) {}
};

exports.vendorLogin = async (req, res) => {
  try {
  } catch (error) {}
};
