module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true, 
            "modules": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "eslint-plugin-react"
    ],
    "rules": {
        "strict": [2, "never"],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": [2],
        "react/react-in-jsx-scope": [2],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};