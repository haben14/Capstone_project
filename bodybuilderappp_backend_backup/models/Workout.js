const {Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');


const Workout = sequelize.define('Workout',{
    
        Bodytypes: {
            type: DataTypes.STRING,
            allowNull:false
    
        },
        Sexs: {
            type: DataTypes.STRING,
            allowNull:false
    
        },
        Week_day: {
            type: DataTypes.STRING,
            allowNull:false
    
        },
        Excercise: {
            type: DataTypes.STRING,
            allowNull:true
        },
    
    },
    {
        timestamps: false,
         tableName: 'workouts'
      })
    
    module.exports = Workout