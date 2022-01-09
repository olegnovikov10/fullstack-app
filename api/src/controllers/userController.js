const { User } = require('../models/models')

class UserController {
	async create(req, res) {
		const user = await User.create(req.body)
		return res.json(user)
	}
	async getOne(req, res) {
		const user = await User.findOne({ where: { id: req.params.id } })
		return res.json(user)
	}
	async getAll(req, res) {
		const users = await User.findAll()
		return res.json(users)
	}
	async update(req, res) {
		const user = await User.update(req.body, { where: { id: req.params.id } })
		return res.json(user)
	}
	async delete(req, res) {
		const user = await User.destroy({ where: { id: req.params.id } })
		return res.json(user)
	}
}

module.exports = new UserController()
