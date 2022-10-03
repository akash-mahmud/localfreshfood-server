const bcrypt = require("bcryptjs");
exports.hashPassword = async (plainTextPassword) => {
  return await bcrypt.hash(plainTextPassword, 10);
};
