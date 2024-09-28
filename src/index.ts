import type { ESLint, Linter } from 'eslint'
import stylistic from '@stylistic/eslint-plugin'
import gitignore from 'eslint-config-flat-gitignore'
import * as importX from 'eslint-plugin-import-x'
import n from 'eslint-plugin-n'
import perfectionist from 'eslint-plugin-perfectionist'
import unusedImports from 'eslint-plugin-unused-imports'

const config: Linter.Config[] = [
  gitignore(),
  {
    name: 'style',
    plugins: { style: stylistic },
    rules: {},
  },
  {
    name: 'node',
    plugins: { node: n },
  },
  {
    name: 'import',
    plugins: {
      'perfectionist': perfectionist,
      'unused-imports': unusedImports,
      'import-x': importX as unknown as ESLint.Plugin,
    },
  },
]

export default config
