const { Like } = require('../models/models')

class LikeController {
	async create(req, res) {
		const like = await Like.create(req.body)
		return res.json(like)
	}
	async getOne(req, res) {
		const like = await Like.findOne({ where: { id: req.params.id } })
		return res.json(like)
	}
	async getAll(req, res) {
		const like = await Like.findAll({ where: { postId: req.query.postId } })
		return res.json(like)
	}
	async update(req, res) {
		const like = await Like.update(req.body, { where: { id: req.params.id } })
		return res.json(like)
	}
	async delete(req, res) {
		const like = await Like.destroy({ where: { id: req.params.id } })
		return res.json(like)
	}
}

module.exports = new LikeController()
