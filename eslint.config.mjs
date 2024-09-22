import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import stylistic from '@stylistic/eslint-plugin'
import antfu from 'eslint-plugin-antfu'
import command from 'eslint-plugin-command/config'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import ts from 'typescript-eslint'

import config from './dist/index.mjs'

export default [
  ...config,
  command(),
  comments.recommended,
  ...ts.configs.recommended,
  stylistic.configs.customize({
    pluginName: 'stylistic',
    indent: 2,
    jsx: true,
    semi: false,
    quotes: 'single',
  }),
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
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/better-regex': 'error',
    },
  },
]
