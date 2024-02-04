const { Sequelize, DataTypes } = require('sequelize');
const { Employee } = require('./emp.model'); // Make sure to import emp.model.js correctly

module.exports = (sequelize) => {
  const Asset = sequelize.define('assets', {
    assetname: {
      type: DataTypes.STRING
    },
    assetcategoryname: {
      type: DataTypes.STRING
    },
    obsolete:{
      type: DataTypes.BOOLEAN,
      default: false
    },

    empid: {
      type: DataTypes.INTEGER
      
    }
  });


  return Asset;
};
