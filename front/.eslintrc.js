module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'plugin:react/jsx-runtime',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.jsx'] },
		],
	},
}
