const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Mood extends Model {}

Mood.init(

  {

    id: {

      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

    },

    userid: {
      type: DataTypes.STRING,
      allowNull: true,

    },

    mood: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    moodtext: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cooking: {
      type: DataTypes.STRING,
      allowNull: true,

    },

    musicact: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    meditateact: {
    type: DataTypes.STRING,
    allowNull: true,
    },

    schoolact: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    junkact: {
    type: DataTypes.STRING,
    allowNull: true,
    },

    bingeact: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    },
{
 

//     hooks: {

   

//       beforeCreate: async (newUserData) => {

 

//         newUserData.email = await newUserData.email.toLowerCase();

//         return newUserData;

//       },

   

//       beforeUpdate: async (updatedUserData) => {

//         updatedUserData.email = await updatedUserData.email.toLowerCase();

//         return updatedUserData;

//       },

//     },

    sequelize,

    timestamps: false,

    freezeTableName: true,

    underscored: true,

    modelName: 'mood',

  }

);

 

module.exports = Mood;