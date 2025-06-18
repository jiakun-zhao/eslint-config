/* eslint perfectionist/sort-objects: "warn" */
/* cSpell:disable */

import type { ESLint, Linter } from 'eslint'
import type { FlatConfig } from '~/types'
import { findDynamicPlugin, findParser, tsParser } from '~/utils'

export async function astro(): Promise<FlatConfig> {
  const pluginAstro = await findDynamicPlugin('eslint-plugin-astro')
  return pluginAstro && createSharedAstroConfig(pluginAstro, {
    'mine/astro-multi-top-level-element-indent': 'warn',
    'mine/no-blank-before-astro-element': 'warn',
    'mine/no-blank-in-astro-frontmatter-edge': 'warn',
  })
}

export function createSharedAstroConfig(plugin: ESLint.Plugin, rules: Linter.RulesRecord = {}): Linter.Config[] {
  return [
    {
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
      processor: (plugin as typeof import('eslint-plugin-astro')).processors?.['client-side-ts'],
      rules,
    },
  ]
}
