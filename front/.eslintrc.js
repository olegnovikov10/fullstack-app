module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/jsx-runtime",
        "prettier",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
        },
        "ecmaVersion": "2018",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
}
