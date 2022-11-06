
module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    pageTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pageDesc: {
      type: Sequelize.STRING(400),
      allowNull: false,
    },
    tags: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Category;
};