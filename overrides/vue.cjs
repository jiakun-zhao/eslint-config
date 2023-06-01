module.exports = {
  files: ['*.vue'],
  parser: 'vue-eslint-parser',
  extends: 'plugin:vue/vue3-recommended',
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/static-class-names-order': 'warn',
  },
}
