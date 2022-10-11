const { hashPassword } = require("../helpers/hashPassword");
const { Admin } = require("../models");
exports.login = async (request, resposnce) => {
  try {
    return resposnce.json({
      loggedIn: true,
      admin: request.user,
    });
  } catch (error) {
    return resposnce.json({
      loggedIn: false,
      message: error.message,
    });
  }
};

exports.AdminRegister = async (request, resposnce) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      country,
      postcode,

      password,
    } = request.body;

    if (!email || !name || !password) {
      return resposnce.json({
        message: "Fill the admin details properly",
      });
    }
    const dataExist = await Admin.findOne({
      where: { email },
    });
    if (dataExist) {
      return resposnce.json({
        message: "Account already exist",
      });
    }

    const hashedPassword = await hashPassword(password);
    await Admin.create({
      name,
      email,
      phone,
      address,
      country,
      postcode,

      password: hashedPassword,
    });
    return resposnce.json({
      message: "Success",
    });
  } catch (error) {
    return resposnce.json({
      message: error.message,
    });
  }
};
