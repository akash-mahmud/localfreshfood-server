const { hashPassword, comparePassword } = require("../helpers/hashPassword");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const types = require("../constants/userTypes");
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
        message: "Already exist",
      });
    }
    const passWodHash = await hashPassword(password);

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
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        message: "please fill the form properly",
      });
    }
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.json({
        message: "not exist",
      });
    }
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        user: {
          id: user.dataValues.id,

          email: user.dataValues.email,
        },
      },
      process.env.JWT_SECRET,
      {
        algorithm: "HS256",
        subject: user.dataValues.id,
        expiresIn: "1d",
      }
    );

    return res.json({
      loggedIn: true,
      message: "success",
      user: { ...user.dataValues, token: token },
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};



exports.vendorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        message: "please fill the form properly",
      });
    }
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.json({
        message: "not exist",
      });
    }
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        user: {
          id: user.dataValues.id,

          email: user.dataValues.email,
        },
      },
      process.env.JWT_SECRET,
      {
        algorithm: "HS256",
        subject: user.dataValues.id,
        expiresIn: "1d",
      }
    );

    return res.json({
      loggedIn: true,
      message: "success",
      user: { ...user.dataValues, token: token },
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};


exports.auth = async (req, res) => {
  try {
    return res.json({
      message: "success",
      user: req.user,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
exports.authAdmin = async (req, res) => {
  try {
    return res.json({
      message: "success",
      admin: req.user,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};