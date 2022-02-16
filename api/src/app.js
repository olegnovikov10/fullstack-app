const express = require('express')
const cors = require('cors')
const sequelize = require('./config/db')
const config = require('./config/config')
// eslint-disable-next-line
const models = require('./models/models')
const router = require('./routes/index')
const path = require('path')

const error = require('./middleware/error')

const logsMiddleware = require('./middleware/logs')

const app = express()

global.__basedir = __dirname

app.use(logsMiddleware({ logTable: models.Logs }))

app.use(cors())

app.use(express.json())

app.use('/api', router)
app.use('/images', express.static(path.join(__dirname, '../images')))

app.use(error)

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
