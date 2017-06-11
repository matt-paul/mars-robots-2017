module.exports = {
    "extends": [
      "airbnb",
      "plugin:flowtype/recommended",
      "plugin:react/recommended",
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "flowtype"
    ],
    "ecmafeatures": {
      "modules": true,
      "jsx": true,
    },
    "env": {
      "jest": true,
      "browser": true,

    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};
