
module.exports = (sequelize, Sequelize) => {
    const Vendor = sequelize.define("vendor", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        },
        store_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        full_name_of_vendor: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    county: {
      type: Sequelize.STRING,
      allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postcode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.JSON,
       
      },
      description: {
        type: Sequelize.TEXT,

    },
    social_media: {
      type: Sequelize.JSON,

      },
      meta_title: {
        type: Sequelize.STRING,

      },
      meta_desc: {
        type: Sequelize.STRING,

      },
      meta_tags: {
        type: Sequelize.STRING,

      },
      policies: {
        type: Sequelize.STRING,

      },
      vendor_logo: {
        type: Sequelize.STRING,

      },
      vendor_cover_image: {
        type: Sequelize.STRING,

    },
    });
  
    return Vendor;
  };