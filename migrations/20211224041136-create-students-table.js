'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('students', { 
        id: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey:true,
          allowNull: false
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
          onDELETE: 'CASCADE',
        },
        jenisKelamin: {
          type: Sequelize.STRING,
          allowNull: false
        },
        noHandphone: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('students');
  }
};
