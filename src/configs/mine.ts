import type { FlatConfig } from '~/types'
import pluginMine from '~/mine'

export function mine(): FlatConfig {
  return {
    name: 'mine',
    plugins: {
      mine: pluginMine,
    },
    rules: {
      'mine/no-space-in-empty-block': 'warn',
    },
  }
}
