module.exports = {
  ignorePatterns: ["*.js", "*.jsx"],
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json"
  },
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      2,
      { "namedComponents": "arrow-function" }
    ]
  },
  overrides: [
    {
      files: ["*.js"], // Apply only to JavaScript files
      rules: {
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
};
