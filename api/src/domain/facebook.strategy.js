const FacebookTokenStrategy = require('passport-facebook-token')
const { getUserByEmail, createUser } = require('../services/user.service')
const config = require('../config/config')
const passport = require('passport')

passport.use(
	new FacebookTokenStrategy(
		{
			clientID: config.authFac.clientId,
			clientSecret: config.authFac.clientSecret,
		},
		async (accessToken, refreshToken, profile, done) => {
			const [{ value: email }] = profile.emails
			let user = await getUserByEmail(email)
			if (!user) {
				await createUser({
					name: profile.displayName,
					email,
				})
				user = await getUserByEmail(email)
				console.log(user)
			}
			return done(null, {
				id: user.id,
				name: user.name,
				email: user.email,
			})
		},
	),
)
module.exports = passport
