const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginVue = require("eslint-plugin-vue");
const configPrettier = require("eslint-config-prettier");

module.exports = [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/vue2-essential"],
  configPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jquery,
        ol: true,
      },
    },

    rules: {
      "vue/multi-word-component-names": "off",
      "vue/valid-template-root": "off",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^(_|event|response|val)",
          caughtErrorsIgnorePattern: "^(_|error)",
          varsIgnorePattern: "^response",
        },
      ],
    },
  },
  {
    ignores: ["dist"],
  },
];
