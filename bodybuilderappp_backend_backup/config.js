const{Sequelize} = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize('capstoneproject', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mariadb'
});
 
module.exports = sequelize;