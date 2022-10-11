module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    user_type: {
      type: Sequelize.STRING,
      required: true,
    },
    phone: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      required: true,
    },

    password: {
      type: Sequelize.STRING,
      required: true,
    },
    address: {
      type: Sequelize.STRING,
    },
    county: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    postcode: {
      type: Sequelize.STRING,
    },
    resetPasswordToken: {
      type: Sequelize.STRING,
    },
    resetPasswordExpires: {
      type: Sequelize.DATE,
    },
  });

  return User;
};
