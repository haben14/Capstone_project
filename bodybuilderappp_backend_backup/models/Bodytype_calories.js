const {Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');


const Bodytype_calories = sequelize.define('Bodytype_calories',{
    
        Bodytypes: {
            type: DataTypes.STRING,
            allowNull:false
    
        },
        Sexs: {
            type: DataTypes.STRING,
            allowNull:false
    
        },
        Caloric_output: {
            type: DataTypes.NUMBER,
            allowNull:true
        },
    
    },
    {
        timestamps: false,
      })
    
    module.exports = Bodytype_calories