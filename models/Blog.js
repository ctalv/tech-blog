// import Model and Datypes class from sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// class constructor
class Blog extends Model {

}

// define model
Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
)


// export model