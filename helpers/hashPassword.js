const bcrypt = require("bcryptjs");
exports.hashPassword = async (plainTextPassword) => {
  return await bcrypt.hash(plainTextPassword, 10);
};

exports.comparePassword = async (plainTextPassword , hashedPassword) => {

  const valid = await bcrypt.compare(plainTextPassword, hashedPassword);
  return valid
};
