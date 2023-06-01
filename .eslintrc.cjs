module.exports = {
  plugins: ['@typescript-eslint', 'solid', 'html'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:solid/typescript'
  ],
  overrides: [
    require('./overrides/mdx.cjs'),
    require('./overrides/astro.cjs'),
    require('./overrides/vue.cjs'),
    require('./overrides/jsonc.cjs')
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  }
}
