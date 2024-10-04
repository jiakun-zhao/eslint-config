import type { Linter } from 'eslint'
import stylistic from '@stylistic/eslint-plugin'
import n from 'eslint-plugin-n'
import plugins from '~/plugins'

function rules(): Partial<Linter.RulesRecord> {
  return {
    ...stylistic.configs.customize({ pluginName: 'style', indent: 2, quotes: 'single', semi: false, jsx: true }).rules,
    ...n.configs['flat/recommended'].rules,
  }
}

function flatConfigs(): Linter.Config[] {
  return Array.from(new Set(plugins.map(it => it.group)))
    .map((group) => {
      const entries = plugins
        .filter(it => it.group === group)
        .map(it => [it.name ?? it.group, it.plugin] as const)
      return { name: group, plugins: Object.fromEntries(entries) }
    })
}

export default [...flatConfigs(), { rules: rules() }] as Linter.Config[]
