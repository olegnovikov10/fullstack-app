const { refresh, logout, authorizeById } = require('../services/authService')

class authController {
	async refresh(req, res) {
		const { accessToken, refreshToken } = await refresh(req.body.refreshToken)
		if (accessToken) {
			return res.send({
				accessToken: accessToken,
				refreshToken: refreshToken,
				success: true,
			})
		}
		res.sendStatus(401)
	}
	async logout(req, res) {
		await logout(req.body.refreshToken)
		return res.send({
			success: true,
		})
	}
	async auth(req, res) {
		const { accessToken, refreshToken } = await authorizeById(req.user.id)
		if (accessToken) {
			return res.send({
				accessToken: accessToken,
				refreshToken: refreshToken,
				success: true,
			})
		}
		res.sendStatus(401)
	}
}

module.exports = new authController()
