const path = require('path')
const { getUsers, getUser, createUser, updateUser, deleteUser, addFile, getFile } = require('../services/user.service')

class UserController {
	async create(req, res) {
		return res.json(await createUser(req.body))
	}
	async getOne(req, res) {
		return res.json(await getUser(req.params.id))
	}
	async getAll(req, res) {
		return res.json(await getUsers())
	}
	async update(request, response) {
		return response.json(await updateUser(request.body, request.params.id))
	}
	async delete(req, res) {
		return res.json(await deleteUser(req.params.id))
	}
	async addFile(req, res) {
		try {
			if (req.file) {
				await addFile(req.file.path, req.params.id)
				return res.json(req.file)
			}
		} catch (e) {
			console.log(e)
			console.log('error back')
		}
	}
	async getAvatar(req, res) {
		const { avatar } = await getFile(req.params.id)
		return res.sendFile(path.join(global.__basedir, `../${avatar}`))
	}
}

module.exports = new UserController()
