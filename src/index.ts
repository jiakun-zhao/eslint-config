import { ESLint } from 'eslint'
import ignorePatterns from './ignorePatterns'

export default <ESLint.ConfigData>{
  plugins: [
    'unicorn',
    'unused-imports',
  ],
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:import/typescript',
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
      extends: ['plugin:vue/vue3-recommended'],
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
        'vue/object-curly-spacing': ['error', 'always'],
      },
    },
    {
      files: ['*.jsx', '*.tsx'],
      extends: [
        'plugin:react/all',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': 'off',
        'react/self-closing-comp': 'off',
        'react/destructuring-assignment': 'off',
        'react/no-multi-comp': 'off',
        'react/function-component-definition': 'off',
        'react/display-name': 'off',

        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2],

        'react/jsx-max-depth': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-no-literals': 'off',
        'react/jsx-max-props-per-line': 'off',
        // 'react/jsx-space-before-closing': ['error', 'always'],
        'react/jsx-tag-spacing': ['error', {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        }],
        'react/jsx-newline': 'off',
        'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
        'react/jsx-curly-spacing': ['error', { when: 'never', children: { when: 'never' } }],
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    // newline
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],

    // import
    'import/no-unresolved': 'off',
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
    'arrow-spacing': ['error', { before: true, after: true }],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      before: false,
      after: true,
      overrides: { arrow: { before: true, after: true } },
    }],
    '@typescript-eslint/space-before-blocks': ['error', 'always'],

    // quote
    'quote-props': ['error', 'consistent-as-needed'],

    // comma
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    // unicorn
    'unicorn/prefer-node-protocol': 'error',
  },
}
