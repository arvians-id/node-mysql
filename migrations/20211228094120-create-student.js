'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nim: {
        type: Sequelize.STRING,
        allowNull: false
      },
      programStudyId: {
        type: Sequelize.BIGINT,
        references: {
          model: "program_studies",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      jenisKelamin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      noHandphone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('students');
  }
};