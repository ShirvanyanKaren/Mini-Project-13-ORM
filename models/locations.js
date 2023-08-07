const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class location extends Model {}

location.init(
    {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
     {
        sequelize,
        timestamps: false,
        unique: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips',
      }

);


module.exports = location;