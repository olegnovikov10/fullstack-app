const { Post } = require('../models/models')
const path = require('path')
const { addFile, getFile } = require('../services/post.service')

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
	async addFile(req, res) {
		try {
			if (req.file) {
				await addFile(req.file.path, req.params.id)
				return res.json(req.file)
			}
		} catch (e) {
			console.log(e)
		}
	}
	async getAvatar(req, res) {
		const { avatar } = await getFile(req.params.id)
		return res.sendFile(path.join(global.__basedir, `../${avatar}`))
	}
}

module.exports = new PostController()
