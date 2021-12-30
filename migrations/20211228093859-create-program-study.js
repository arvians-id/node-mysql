'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('program_studies', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false
      },
      facultyId: {
        type: Sequelize.BIGINT,
        references: {
          model: "faculties",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      name: {
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
    await queryInterface.dropTable('program_studies');
  }
};
