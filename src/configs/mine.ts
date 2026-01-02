import type { FlatConfig } from '~/types'
import pluginMine from '~/mine'

export function mine(): FlatConfig {
  return {
    name: 'mine',
    plugins: {
      mine: pluginMine,
    },
    rules: {
      'mine/no-newline-in-closing-tag': 'warn',
      'mine/no-space-before-opening-tag': 'warn',
    },
  }
}
