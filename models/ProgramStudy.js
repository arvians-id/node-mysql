'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProgramStudy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.faculty, {
        as: 'faculty'
      });
    }
  };
  ProgramStudy.init({
    facultyId: {
      type: DataTypes.BIGINT,
      references: {
        model: "faculty",
        key: "id"
      },
      onUpdate: 'CASCADE',
      onDELETE: 'CASCADE',
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'program_study',
  });
  return ProgramStudy;
};