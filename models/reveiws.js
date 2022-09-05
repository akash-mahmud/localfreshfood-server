module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("review", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rating_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Review;
};
