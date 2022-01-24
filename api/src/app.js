const express = require('express')
const cors = require('cors')
const sequelize = require('./services/db')
const config = require('./services/config')
// eslint-disable-next-line
const models = require('./models/models')
const router = require('./routes/index')

const app = express()

app.use(cors())

app.use(express.json())
app.use('/api', router)

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
