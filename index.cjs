module.exports = {
  extends: ['@antfu'],
  rules: {
    'brace-style': ['warn', '1tbs'],
    '@typescript-eslint/brace-style': ['warn', '1tbs'],

    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/static-class-names-order': 'warn',

    'no-console': 'warn',
  },
}
