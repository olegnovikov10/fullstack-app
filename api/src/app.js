const express = require('express')

const sequelize = require('./services/db')

const config = require('./services/config')

const app = express()

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(config.appPort, () => {
			console.log('work')
		})
	} catch (e) {
		console.log(e)
	}
}

start()

app.get('/', function (req, res) {
	res.send('Hello World')
})
