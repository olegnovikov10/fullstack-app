const GoogleTokenStrategy = require('passport-google-token').Strategy
const { getUserByEmail, createUser } = require('../services/user.service')
const config = require('../config/config')
const passport = require('passport')

passport.use(
	new GoogleTokenStrategy(
		{
			clientID: config.auth.clientId,
			clientSecret: config.auth.clientSecret,
		},
		//  Passport verify callback
		async (accessToken, refreshToken, profile, done) => {
			const [{ value: email }] = profile.emails
			let user = await getUserByEmail(email)
			if (!user) {
				await createUser({
					name: profile.displayName,
					email,
				})
				user = await getUserByEmail(email)
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
