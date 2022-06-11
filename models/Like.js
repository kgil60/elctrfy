const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Like extends Model {}

Like.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'like'
    }
)

module.exports = Like;