const { User } = require('../models/models')

module.exports = {
	getUsers: async () => {
		return await User.findAll()
	},
	getUser: async (userId) => {
		return await User.findOne({ where: { id: userId } })
	},
	createUser: async (user) => {
		return await User.create(user)
	},
	updateUser: async (user, userId) => {
		return await User.update(user, { where: { id: userId } })
	},
	deleteUser: async (userId) => {
		return await User.destroy({ where: { id: userId } })
	},
}
