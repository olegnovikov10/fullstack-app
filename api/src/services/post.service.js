const { Post } = require('../models/models')

module.exports = {
	addFile: async (path, postId) => {
		return await Post.update(
			{
				avatar: path,
			},
			{
				where: {
					id: postId,
				},
			},
		)
	},
	getFile: async (postId) => {
		return await Post.findOne({
			where: {
				id: postId,
			},
			attributes: ['avatar'],
		})
	},
}
