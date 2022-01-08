const { Comment } = require('../models/models')

class CommentController {
	async create(req, res) {
		const comment = await Comment.create(req.body)
		return res.json(comment)
	}
	async getOne(req, res) {
		const comment = await Comment.findOne({ where: { id: req.params.id } })
		return res.json(comment)
	}
	async getAll(req, res) {
		const comment = await Comment.findAll()
		return res.json(comment)
	}
	async update(req, res) {
		const comment = await Comment.update(req.body, { where: { id: req.params.id } })
		return res.json(comment)
	}
	async delete(req, res) {
		const comment = await Comment.destroy({ where: { id: req.params.id } })
		return res.json(comment)
	}
}

module.exports = new CommentController()
