const sequelize = require('../config/db')

const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	email: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	},
	alias: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	phone: {
		type: DataTypes.INTEGER,
	},
	birthday: {
		type: DataTypes.STRING,
	},
	avatar: {
		type: DataTypes.STRING,
	},
	visibility: {
		type: DataTypes.STRING,
	},
})

const Post = sequelize.define('post', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	content: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	visibility: {
		type: DataTypes.STRING,
	},
	avatar: {
		type: DataTypes.STRING,
	},
})

const Comment = sequelize.define('comment', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	content: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

const Like = sequelize.define('like', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
})

User.hasMany(Post, {
	foreignKey: 'userId',
})
Post.belongsTo(User)

User.hasMany(Comment, {
	foreignKey: 'userId',
})
Comment.belongsTo(User)

Post.hasMany(Comment, {
	foreignKey: 'postId',
})
Comment.belongsTo(Post)

User.hasMany(Like, {
	foreignKey: 'userId',
})
Like.belongsTo(User)

Post.hasMany(Like, {
	foreignKey: 'postId',
})
Like.belongsTo(Post)

Comment.hasMany(Comment, {
	foreignKey: 'parentId',
})

Comment.belongsTo(Comment)

module.exports = {
	User,
	Post,
	Like,
	Comment,
}
