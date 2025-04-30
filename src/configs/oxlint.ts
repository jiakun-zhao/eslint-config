/* eslint perfectionist/sort-objects: "warn" */

import type { FlatConfig } from '~/types'
import { renamePluginsInRules } from 'eslint-flat-config-utils'
import { pluginOxlint } from '~/definition'

export function oxlint(): FlatConfig {
  return {
    name: 'oxlint',
    rules: renamePluginsInRules(pluginOxlint.configs.all.rules as Record<string, string>, {
      '@typescript-eslint': 'ts',
      'import': 'import-x',
    }),
  }
}
