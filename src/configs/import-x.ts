/* eslint perfectionist/sort-objects: "warn" */

import type { FlatConfig } from '~/types'
import { pluginImportX } from '~/definition'

export function importX(): FlatConfig {
  return {
    name: 'import-x',
    plugins: {
      'import-x': pluginImportX as any,
    },
    rules: {
      'import-x/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
      'import-x/first': 'warn',
      'import-x/newline-after-import': ['warn', { count: 1 }],
      'import-x/no-duplicates': 'warn',
      'import-x/no-mutable-exports': 'warn',
      'import-x/no-named-default': 'warn',
      'import-x/no-self-import': 'warn',
      'import-x/no-webpack-loader-syntax': 'warn',
    },
  }
}
