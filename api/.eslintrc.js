module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 13
    },
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": [
            "error", {
            "endOfLine": "auto"
             }
        ]
    }
};
