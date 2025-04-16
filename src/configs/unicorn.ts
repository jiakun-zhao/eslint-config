/* eslint perfectionist/sort-objects: "warn" */

import type { FlatConfig } from '~/types'
import { pluginUnicorn } from '~/definition'

export function unicorn(): FlatConfig {
  return {
    name: 'unicorn',
    plugins: {
      unicorn: pluginUnicorn,
    },
    rules: {
      'unicorn/consistent-empty-array-spread': 'warn',
      'unicorn/error-message': 'warn',
      'unicorn/escape-case': 'warn',
      'unicorn/new-for-builtins': 'warn',
      'unicorn/no-instanceof-builtins': 'warn',
      'unicorn/no-new-array': 'warn',
      'unicorn/no-new-buffer': 'warn',
      'unicorn/number-literal-case': 'warn',
      'unicorn/prefer-dom-node-text-content': 'warn',
      'unicorn/prefer-includes': 'warn',
      'unicorn/prefer-node-protocol': 'warn',
      'unicorn/prefer-number-properties': 'warn',
      'unicorn/prefer-string-starts-ends-with': 'warn',
      'unicorn/prefer-type-error': 'warn',
      'unicorn/throw-new-error': 'warn',
    },
  }
}
