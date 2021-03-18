'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  History.init({
      wallet_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      amount: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      type: {
          type: DataTypes.STRING,
          allowNull: false
      },
      other_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
  },
  {
    sequelize,
    tableName: 'history',
    modelName: 'History',
  });
  return History;
};