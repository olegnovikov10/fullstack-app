module.exports = {
	appPort: process.env.APP_PORT,
	dbHost: process.env.DB_HOST,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbDatabase: process.env.DB_DATABASE,
	dbPORT: process.env.DB_PORT,
	appKey: process.env.APP_KEY,
	auth: {
		clientId: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
	},
	authFac: {
		clientId: process.env.FACEBOOK_CLIENT_ID,
		clientSecret: process.env.F_CLIENT_SECRET,
	},
}
