const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/capstone', { logging: false, operatorsAliases: false })

module.exports = conn;
