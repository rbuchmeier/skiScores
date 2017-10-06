'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const raceModel = sequelize.define('raceModel', {
        raceId: {
            type: Sequelize.INTEGER,
            unique: true,
            primaryKey: true
        },
        location: {
            type: Sequelize.STRING(10)
        },
        date: {
            type: Sequelize.DATE
        },
        class: {
            type: Sequelize.STRING(10)
        },
        level: {
            type: Sequelize.STRING(3)
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });

raceModel.sync({}).then(function () {
    // Table created
    return raceModel.create({
        raceId: 123,
        location: 'landerwy',
        date: '',
        class: 'Varsity',
        level: '231'
    });
});
};