'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('client', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING
    },
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};