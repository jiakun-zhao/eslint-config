module.exports = {
  extends: '@antfu',
  rules: {
    // https://eslint.org
    // https://typescript-eslint.io
    'brace-style': ['warn', '1tbs'],
    'no-console': 'warn',

    // https://eslint.vuejs.org
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/static-class-names-order': 'warn',
  },
  overrides: [
    {
      // https://github.com/ota-meshi/eslint-plugin-jsonc
      files: ['*.json', '*.json5', '*.jsonc'],
      rules: {
        'jsonc/sort-keys': 'off',
        'jsonc/key-name-casing': 'off',
        'jsonc/array-bracket-newline': ['error', 'consistent'],
      },
    },
  ],
}
