/* eslint perfectionist/sort-objects: "warn" */

import type { FlatConfig } from '~/types'
import { pluginAntfu } from '~/definition'

export function antfu(): FlatConfig {
  return {
    name: 'antfu',
    plugins: {
      antfu: pluginAntfu,
    },
    rules: {
      'antfu/consistent-list-newline': ['warn', { JSXOpeningElement: false }],
      'antfu/if-newline': 'warn',
    },
  }
}
