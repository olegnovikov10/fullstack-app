const { Session } = require('../models/models')

module.exports = {
	create: (session) => {
		console.log(Session)
		Session.create(session)
	},
	getByToken: (token) => Session.findOne({ where: { token: token } }),
	deleteByToken: (token) => Session.destroy({ where: { token: token } }),
	deleteAllTokens: (userId) => Session.destroy({ where: { userId: userId } }),
}
