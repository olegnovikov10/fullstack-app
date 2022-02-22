const { User } = require('../models/models')

module.exports = {
	getUsers: async () => {
		return await User.findAll()
	},
	getUser: async (userId) => {
		return await User.findOne({ where: { id: userId } })
	},
	getUserByEmail: async (email) => {
		return await User.findOne({ where: { email: email } })
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
	addFile: async (path, userId) => {
		return await User.update(
			{
				avatar: path,
			},
			{
				where: {
					id: userId,
				},
			},
		)
	},
	getFile: async (userId) => {
		return await User.findOne({
			where: {
				id: userId,
			},
			attributes: ['avatar'],
		})
	},
}
