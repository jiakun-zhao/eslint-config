module.exports = {
  extends: [
    '@antfu',
    '@antfu/eslint-config-react',
  ],
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
    {
      // react: https://github.com/jsx-eslint/eslint-plugin-react/tree/master#list-of-supported-rules
      files: ['*.jsx', '*.tsx'],
      rules: {
        'react/jsx-wrap-multilines': ['error', { declaration: 'parens-new-line', assignment: 'parens-new-line', return: 'parens-new-line', arrow: 'parens-new-line', condition: 'parens-new-line', logical: 'parens-new-line', prop: 'parens-new-line' }],
        'react/jsx-tag-spacing': ['error', { closingSlash: 'never', beforeClosing: 'never' }],
        'react/jsx-pascal-case': ['warn', { allowAllCaps: true }],
        'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
        'react/jsx-indent-props': ['error', 2],
        'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never', propElementValues: 'always' }],
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-boolean-value': ['error', 'never'],
        'react/destructuring-assignment': ['error', 'never'],
        'react/no-unknown-property': 'off',
      },
    },
  ],
}
