const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '10201982Daniel', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;