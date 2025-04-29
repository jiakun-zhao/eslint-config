/* eslint perfectionist/sort-objects: "warn" */

import type { FlatConfig } from '~/types'
import { pluginUnocss } from '~/definition'

export function unocss(): FlatConfig {
  return {
    name: 'unocss',
    plugins: {
      unocss: pluginUnocss as any,
    },
    rules: {
      'unocss/order': 'warn',
    },
  }
}
