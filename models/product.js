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
  });

  return Product;
};
