'use strict';

/** @type {import('sequelize-cli').Migration} */


'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },

      categoryName: {
        type: Sequelize.STRING,
        references: {
          model: "Category",
          key: "name"
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  }
};