import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module", // Adjust as needed
      },
    },
    rules: {
      // "prettier/prettier": "error", // Treats Prettier issues as ESLint errors

      "no-unused-vars": "error",
      // "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
    plugins: ["import"],
    extends: [
      "airbnb-base",
      "plugin:import/errors",
      "plugin:import/warnings",
      "prettier",
    ],
    eslintConfigPrettier,
  },
  pluginJs.configs.recommended,
];
