module.exports = {
  plugins: ['@typescript-eslint', 'solid', 'html'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:solid/typescript',
  ],
  overrides: [
    require('./overrides/astro.cjs'),
    require('./overrides/jsonc.cjs'),
    require('./overrides/mdx.cjs'),
    require('./overrides/solid.cjs'),
    require('./overrides/vue.cjs'),
  ],
  rules: {
    // https://eslint.org/docs/latest/rules/:rule-name
    'brace-style': ['warn', '1tbs'],
    'quote-props': ['error', 'consistent-as-needed'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': ['error', 'always-multiline'],
    'array-bracket-newline': ['error', 'consistent'], // jsonc

    // import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/newline-after-import': ['error', { count: 1, considerComments: true }],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
}
