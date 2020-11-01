const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete','root','Phoenix171894!',{dialect:'mysql'});


module.exports = sequelize