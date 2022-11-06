module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    images: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },

    description: {
      type: Sequelize.TEXT,
    },
    price: {
      type: Sequelize.REAL,
    },
    sku: {
      type: Sequelize.STRING,
    },
    isMainCategoryItem: {
      type: Sequelize.BOOLEAN,
      default: false,
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

  return Product;
};
