/* eslint perfectionist/sort-objects: "warn" */

import type { FlatConfig } from '~/types'
import { indent, packageJsonTopLevelOrder, pluginJsonc } from '~/definition'
import { jsoncParser } from '~/utils'

export function jsonc(): FlatConfig {
  return [
    {
      files: [
        '**/*.json',
        '**/*.jsonc',
        '**/*.json5',
      ],
      languageOptions: {
        parser: jsoncParser,
      },
      name: 'jsonc',
      plugins: {
        jsonc: pluginJsonc as any,
      },
      rules: {
        'jsonc/array-bracket-newline': ['warn', 'consistent'],
        'jsonc/array-bracket-spacing': ['warn', 'never'],
        'jsonc/array-element-newline': ['warn', 'consistent'],
        'jsonc/comma-dangle': ['warn', 'never'],
        'jsonc/comma-style': ['warn', 'last'],
        'jsonc/indent': ['warn', indent],
        'jsonc/key-spacing': 'warn',
        'jsonc/no-sparse-arrays': 'warn',
        'jsonc/object-curly-newline': ['warn', { consistent: true }],
        'jsonc/object-curly-spacing': ['warn', 'always'],
      },
    },
    {
      files: [
        '**/.vscode/settings.json',
        '**/tsconfig.json',
      ],
      name: 'jsonc/just-sort',
      rules: {
        'jsonc/sort-array-values': ['warn', { order: { type: 'asc' }, pathPattern: '.*' }],
        'jsonc/sort-keys': ['warn', { order: { type: 'asc' }, pathPattern: '.*' }],
      },
    },
    {
      files: [
        '**/package.json',
      ],
      name: 'jsonc/package-json',
      rules: {
        'jsonc/sort-array-values': [
          'warn',
          { order: { type: 'asc' }, pathPattern: '^files$' },
        ],
        'jsonc/sort-keys': [
          'warn',
          { order: packageJsonTopLevelOrder, pathPattern: '^$' },
          { order: { type: 'asc' }, pathPattern: '^(?:exports|scripts)' },
          /* cSpell:disable-next-line */
          { order: { type: 'asc' }, pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$' },
        ],
      },
    },
  ]
}
