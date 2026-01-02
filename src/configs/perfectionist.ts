/* eslint perfectionist/sort-objects: "warn" */

import type { FlatConfig } from '~/types'
import { pluginPerfectionist } from '~/definition'

export function perfectionist(): FlatConfig {
  return {
    name: 'perfectionist',
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      'perfectionist/sort-exports': ['warn', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-imports': ['warn', { newlinesBetween: 0, type: 'alphabetical' }],
      'perfectionist/sort-named-exports': ['warn', { order: 'asc', type: 'natural' }],
      'sort-imports': ['warn', { ignoreCase: false, ignoreDeclarationSort: true, ignoreMemberSort: false }],
    },
  }
}
