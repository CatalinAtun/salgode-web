module.exports = {
  parser: "babel-eslint",
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: [
    "prettier",
    "react"
  ],
  rules: {
		"prettier/prettier": ["error", {
      trailingComma: "es5",
      semi: false,
      singleQuote: true,
    }],
		"prefer-const": ["error", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
    }],
		"no-var": "error",
    "eqeqeq": ["error", "smart"],
	}
};
