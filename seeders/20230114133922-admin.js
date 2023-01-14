"use strict";

/** @type {import('sequelize-cli').Migration} */
const { hashPassword } = require("../helpers/hashPassword");
const { v4:uuidv4} = require( 'uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const hashedPassword = await hashPassword("1234");
    return queryInterface.bulkInsert(
      "Admins",
      [
        {
          id: uuidv4(),
          name: "admin",
          email: "admin@gmail.com",
          phone: "12345678",
          address: "admin adress",
          country: "admin country",
          postcode: "15648",

          isAdmin: true,

          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete("Users", null, {});
  },
};
