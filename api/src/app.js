const express = require('express')
const sequelize = require('./services/db')
const config = require('./services/config')
// eslint-disable-next-line
const models = require('./models/models')

const app = express()

app.use(express.json())

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
