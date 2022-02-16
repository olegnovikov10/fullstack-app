module.exports = (options) => (request, response, next) => {
	const { logTable } = options
	logTable.create({ method: request.method, path: request.url }).then(() => next())
}
