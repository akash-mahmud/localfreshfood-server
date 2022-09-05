
module.exports = (sequelize, Sequelize) => {
    const MainCategory = sequelize.define("mainCategory", {
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


  

    });
  
    return MainCategory;
  };