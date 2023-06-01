const indent = 2

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'html', 'react'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    // https://eslint.org/docs/latest/rules/:rule-name
    'brace-style': ['warn', '1tbs'],
    'quote-props': ['error', 'consistent-as-needed'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'curly': ['warn', 'multi-or-nest', 'consistent'],
    'comma-dangle': ['error', 'always-multiline'],
    'array-bracket-newline': ['error', 'consistent'], // jsonc
    'space-before-blocks': ['error'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],

    // import: 还不知道对应每个是啥意思
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/newline-after-import': ['error', { count: 1, considerComments: true }],

    // react: https://github.com/jsx-eslint/eslint-plugin-react/tree/master#list-of-supported-rules
    'react/react-in-jsx-scope': 'off',
    'react/jsx-wrap-multilines': ['error', { declaration: 'parens-new-line', assignment: 'parens-new-line', return: 'parens-new-line', arrow: 'parens-new-line', condition: 'parens-new-line', logical: 'parens-new-line', prop: 'parens-new-line' }],
    'react/jsx-tag-spacing': ['error', { closingSlash: 'never', beforeClosing: 'never' }],
    'react/jsx-pascal-case': ['warn', { allowAllCaps: true }],
    'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
    'react/jsx-indent-props': ['error', indent],
    'react/jsx-indent': ['error', indent, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never', propElementValues: 'always' }],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/destructuring-assignment': ['error', 'never'],
  },
  overrides: [
    {
      // jsonc
      files: ['*.json', '*.json5', '*.jsonc'],
      extends: 'plugin:jsonc/all',
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/indent': ['error', indent],
        'jsonc/sort-keys': 'off',
        'jsonc/key-name-casing': 'off',
        'jsonc/array-bracket-newline': ['error', 'consistent'],
      },
    },
    {
      // mdx
      files: ['*.mdx'],
      extends: 'plugin:mdx/recommended',
      rules: {
        indent: 'off',
      },
    },
    {
      // vue
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      extends: 'plugin:vue/vue3-recommended',
      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': 'off',
        'vue/static-class-names-order': 'warn',
      },
    },
  ],
}
