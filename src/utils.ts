import type { RuleDefinition } from '@eslint/core'
import type { ESLint, Linter } from 'eslint'
import type { CustomRule } from '~/types'
import { pluginJsonc, pluginTypescript } from '~/definition'

export const tsParser = findParser(pluginTypescript as any)
export const jsoncParser = findParser(pluginJsonc as any)

export function findParser(plugin: ESLint.Plugin) {
  const configs = Object.values(plugin.configs ?? {}).flat()
  for (const config of configs) {
    const parser = (config as Linter.Config).languageOptions?.parser
    if (parser)
      return parser
  }
  throw new Error(`Can not find parser in ${plugin.meta?.name}`)
}

export async function findDynamicPlugin(name: string, key: string = 'default') {
  try {
    return (await import(name))[key] as ESLint.Plugin
  } catch {
    return null
  }
}

export function createRule<MessageIds extends string = string>(rule: CustomRule<MessageIds>) {
  const { name, ...rest } = rule
  rest.meta.docs ??= {}
  rest.meta.docs.url = `https://example.com/${name}`
  return rest as unknown as RuleDefinition
}
