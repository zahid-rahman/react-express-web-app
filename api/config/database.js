const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('fullstack', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  operatorsAliases:false,  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});