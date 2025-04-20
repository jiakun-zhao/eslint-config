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
      'unicorn/empty-brace-spaces': 'warn',
      'unicorn/error-message': 'warn',
      'unicorn/escape-case': 'warn',
      'unicorn/explicit-length-check': 'warn',
      'unicorn/new-for-builtins': 'warn',
      'unicorn/no-instanceof-builtins': 'warn',
      'unicorn/no-negation-in-equality-check': 'warn',
      'unicorn/no-new-array': 'warn',
      'unicorn/no-new-buffer': 'warn',
      'unicorn/no-useless-length-check': 'warn',
      'unicorn/number-literal-case': 'warn',
      'unicorn/prefer-array-flat-map': 'warn',
      'unicorn/prefer-dom-node-text-content': 'warn',
      'unicorn/prefer-includes': 'warn',
      'unicorn/prefer-logical-operator-over-ternary': 'warn',
      'unicorn/prefer-node-protocol': 'warn',
      'unicorn/prefer-number-properties': 'warn',
      'unicorn/prefer-string-starts-ends-with': 'warn',
      'unicorn/prefer-string-trim-start-end': 'warn',
      'unicorn/prefer-ternary': 'warn',
      'unicorn/prefer-type-error': 'warn',
      'unicorn/string-content': 'warn',
      'unicorn/switch-case-braces': 'warn',
      'unicorn/throw-new-error': 'warn',
    },
  }
}
