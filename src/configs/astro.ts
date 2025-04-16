/* eslint perfectionist/sort-objects: "warn" */
/* cSpell:disable */

import type { ESLint, Linter } from 'eslint'
import type { FlatConfig } from '~/types'
import { findDynamicPlugin, findParser, tsParser } from '~/utils'

export async function astro(): Promise<FlatConfig> {
  const pluginAstro = await findDynamicPlugin('eslint-plugin-astro')
  return pluginAstro && createSharedAstroConfig(pluginAstro)
}

export function createSharedAstroConfig(plugin: ESLint.Plugin): Linter.Config {
  return {
    files: [
      '**/*.astro',
    ],
    languageOptions: {
      parser: findParser(plugin),
      parserOptions: {
        extraFileExtensions: [
          '.astro',
        ],
        parser: tsParser,
      },
    },
    name: 'astro',
    plugins: {
      astro: plugin,
    },
  }
}
