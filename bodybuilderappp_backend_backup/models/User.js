const {Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');

const User = sequelize.define('user',{
    Firstname: {
        type: DataTypes.STRING,
        allowNull:false

    },
    Lastname: {
        type: DataTypes.STRING,
        allowNull:false

    },
    email: {
        type: DataTypes.STRING,
        allowNull:false

    },
    username: {
        type: DataTypes.STRING,
        allowNull:true
    },

    password: {
        type: DataTypes.STRING,
        allowNull:false

    },
},
{
    timestamps: false,
  })

module.exports = User