import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import stylistic from '@stylistic/eslint-plugin'
import antfu from 'eslint-plugin-antfu'
import command from 'eslint-plugin-command/config'
import n from 'eslint-plugin-n'
import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'
import ts from 'typescript-eslint'

export default [
  command(),
  comments.recommended,
  ...ts.configs.recommended,
  n.configs['flat/recommended'],
  stylistic.configs.customize({
    pluginName: 'stylistic',
    indent: 2,
    jsx: true,
    semi: false,
    quotes: 'single',
  }),
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    plugins: {
      antfu,
    },
    rules: {
      'antfu/if-newline': 'error',
    },
  },
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': 'error',
    },
  },
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/better-regex': 'error',
    },
  },
]
