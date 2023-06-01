module.exports = {
  files: ['*.json', '*.json5', '*.jsonc'],
  extends: 'plugin:jsonc/all',
  parser: 'jsonc-eslint-parser',
  rules: {
    'jsonc/indent': ['error', 2],
    'jsonc/sort-keys': 'off',
    'jsonc/key-name-casing': 'off',
    'jsonc/array-bracket-newline': ['error', 'consistent'],
  },
}
