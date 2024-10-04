import type { ESLint } from 'eslint'
import stylistic from '@stylistic/eslint-plugin'
import gitignore from 'eslint-config-flat-gitignore'
import antfu from 'eslint-plugin-antfu'
import * as importX from 'eslint-plugin-import-x'
import n from 'eslint-plugin-n'
import perfectionist from 'eslint-plugin-perfectionist'
import unusedImports from 'eslint-plugin-unused-imports'

interface Plugin {
  group: string
  plugin: ESLint.Plugin
  name?: string
}

export default <Plugin[]>[
  { group: 'ignore', plugin: gitignore(), name: 'gitignore' },
  { group: 'style', plugin: stylistic },
  { group: 'node', plugin: n },
  { group: 'import', plugin: importX, name: 'import-x' },
  { group: 'import', plugin: perfectionist, name: 'perfectionist' },
  { group: 'import', plugin: unusedImports, name: 'unused-imports' },
  { group: 'antfu', plugin: antfu },
]
