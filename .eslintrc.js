module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/strongly-recommended",
    "@vue/airbnb",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    indent: 2,
    "comma-dangle": 0,
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "eol-last": ["error", "never"],
    "no-plusplus": "off",
    "template-curly-spacing": ["error", "always"]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
      },
    },
  ],
};