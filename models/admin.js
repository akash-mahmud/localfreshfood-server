module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admin", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: Sequelize.STRING,
      required: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      required: true,

    },
    phone: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    postcode: {
      type: Sequelize.STRING,
    },

    password: {
      type: Sequelize.STRING,

      required: true,
    },

    resetPasswordToken: {
      type: Sequelize.STRING,
    },
    resetPasswordExpires: {
      type: Sequelize.DATE,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Admin;
};
