/* eslint perfectionist/sort-objects: "warn" */

import type { FlatConfig } from '~/types'
import { pluginCommand } from '~/definition'

export function command(): FlatConfig {
  return {
    name: 'command',
    plugins: {
      command: pluginCommand as any,
    },
    rules: {
      'command/command': 'warn',
    },
  }
}
