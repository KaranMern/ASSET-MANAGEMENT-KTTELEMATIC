const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Employee = sequelize.define('employees', {
    name: {
      type: DataTypes.STRING
    },
    teamname: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    assetid: {
      type: DataTypes.INTEGER
      
    }
  });

  return Employee;
};
