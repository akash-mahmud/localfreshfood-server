module.exports = (sequelize, Sequelize) => {
  const SubCategory = sequelize.define("subCategory", {
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

    isMainCategoryItem: {
      type: Sequelize.BOOLEAN,
      default: false,
    },
  });

  return SubCategory;
};
