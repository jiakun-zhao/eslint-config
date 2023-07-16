import type { ESLintConfig } from './types'
import ignorePatterns from './ignorePatterns'

export default <ESLintConfig>{
  plugins: [
    'unused-imports',
  ],
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  ignorePatterns,
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      },
    },
  ],
  rules: {
    // import
    'unused-imports/no-unused-imports': 'error',
    'import/order': 'error',
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: false,
    }],

    // spacing
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'switch-colon-spacing': ['error', { before: false, after: true }],
    'space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true }],

    // quote
    'quote-props': ['error', 'consistent-as-needed'],

    // comma
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
  },
}
