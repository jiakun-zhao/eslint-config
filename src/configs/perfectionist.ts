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
      'perfectionist/sort-imports': ['warn', {
        groups: ['type', ['parent-type', 'sibling-type', 'index-type', 'internal-type'], 'builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'side-effect', 'object', 'unknown'],
        newlinesBetween: 'ignore',
        order: 'asc',
        type: 'natural',
      }],
      'perfectionist/sort-named-exports': ['warn', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-named-imports': ['warn', { order: 'asc', type: 'natural' }],
    },
  }
}
