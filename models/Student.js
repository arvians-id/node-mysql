'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.program_study);
    }
  };
  Student.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nim: {
      type: DataTypes.STRING,
      allowNull: false
    },
    programStudyId: {
      type: DataTypes.BIGINT,
      references: {
        model: "program_study",
        key: "id"
      },
      onUpdate: 'CASCADE',
      onDELETE: 'CASCADE',
    },
    jenisKelamin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    noHandphone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'student',
  });
  return Student;
};