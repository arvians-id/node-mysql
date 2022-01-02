'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    emailVerifiedAt: {
      type: DataTypes.DATE
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      defaultValue: 'image.png',
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};