
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class trips extends Model {}

trips.init(
    {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        trip_budget : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        traveler_amount : {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
            }

        },
        traveler_id: {
            type: DataTypes.INTEGER,
            refernces : {
                model: 'traveler',
                key: 'id',
            }

        },
        location_id: {
            type: DataTypes.INTEGER,
            refernces : {
                model: 'location',
                key: 'id',
            }

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

module.exports = trips;