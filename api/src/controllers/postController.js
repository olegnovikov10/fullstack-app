const { Post } = require('../models/models')

class PostController {
	async create(req, res) {
		const post = await Post.create(req.body)
		return res.json(post)
	}
	async getOne(req, res) {
		const post = await Post.findOne({ where: { id: req.params.id } })
		return res.json(post)
	}
	async getAll(req, res) {
		const posts = await Post.findAll()
		return res.json(posts)
	}
	async update(req, res) {
		const post = await Post.update(req.body, { where: { id: req.params.id } })
		return res.json(post)
	}
	async delete(req, res) {
		const post = await Post.destroy({ where: { id: req.params.id } })
		return res.json(post)
	}
}

module.exports = new PostController()
