module.exports = (fn) => (req, res, next) => {
	return Promise.resolve(fn(req, res, next))
		.then(() => next())
		.catch(next)
}
