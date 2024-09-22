import * as importX from 'eslint-plugin-import-x'
import perfectionist from 'eslint-plugin-perfectionist'
import unusedImports from 'eslint-plugin-unused-imports'

import { defineConfig } from './utils'

export default defineConfig({
  name: 'import',
  plugins: {
    'unused-imports': unusedImports,
    'perfectionist': perfectionist,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    'import-x': importX,
  },
  rules: {
    // eslint-plugin-unused-imports
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],

    // 'antfu/import-dedupe': 'error',
    // 'antfu/no-import-dist': 'error',
    // 'antfu/no-import-node-modules-by-path': 'error',
    'import-x/first': 'error',
    'import-x/no-duplicates': 'error',
    'import-x/no-mutable-exports': 'error',
    'import-x/no-named-default': 'error',
    'import-x/no-self-import': 'error',
    'import-x/no-webpack-loader-syntax': 'error',
    'import-x/newline-after-import': ['error', { count: 1 }],

    'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
    'perfectionist/sort-imports': ['error', { groups: ['type', ['parent-type', 'sibling-type', 'index-type'], 'builtin', 'external', ['internal', 'internal-type'], ['parent', 'sibling', 'index'], 'side-effect', 'object', 'unknown'], newlinesBetween: 'ignore', order: 'asc', type: 'natural' }],
    'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
    'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
  },
})
