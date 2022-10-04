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

      allowNull: false,

    },

    mood: {

      type: DataTypes.STRING,

      allowNull: false,

    },

    act1: {

      type: DataTypes.STRING,

      allowNull: true,

    },

    act2: {

        type: DataTypes.STRING,

        allowNull: true,

      },

    act3: {

    type: DataTypes.STRING,

    allowNull: true,

    },

    act4: {

        type: DataTypes.STRING,

        allowNull: true,

      },

    act5: {

    type: DataTypes.STRING,

    allowNull: true,

    },

    act6: {

        type: DataTypes.STRING,

        allowNull: true,

      },

    }

 

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

//     sequelize,

//     timestamps: false,

//     freezeTableName: true,

//     underscored: true,

//     modelName: 'mood',

//   }

);

 

module.exports = Mood;