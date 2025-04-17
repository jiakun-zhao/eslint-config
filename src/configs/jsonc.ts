/* eslint perfectionist/sort-objects: "warn" */

import type { FlatConfig } from '~/types'
import { indent, pluginJsonc } from '~/definition'
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
  ]
}
