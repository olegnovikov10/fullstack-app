const { Sequelize } = require('sequelize')

const config = require('./config')

module.exports = new Sequelize(config.dbDatabase, config.dbUser, config.dbPassword, {
	dialect: 'postgres',
	host: config.dbHost,
	port: config.dbPORT,
})
