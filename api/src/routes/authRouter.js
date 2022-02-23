const Router = require('express')
const router = new Router()
const authController = require('../controllers/authController')
const asyncHandler = require('../middleware/asyncHandler')
const passport = require('passport')

/*router.post(
	'/login',
	asyncHandler(async (req, res) => {
		const { accessToken, refreshToken } = await service.authorize(req.body.email, req.body.password)
		if (accessToken) {
			return res.send({
				accessToken,
				refreshToken,
				success: true,
			})
		}
		res.sendStatus(401)
	}),
)*/
router.post('/refresh', asyncHandler(authController.refresh))
router.post('/logout', asyncHandler(authController.logout))
router.post('/google', passport.authenticate('google-token', { session: false }), asyncHandler(authController.auth))

router.post('/facebook', passport.authenticate('facebook-token', { session: false }), asyncHandler(authController.auth))

module.exports = router
