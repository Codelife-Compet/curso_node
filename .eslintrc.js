module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  plugins: ["jest"],
  extends: ["standard", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
