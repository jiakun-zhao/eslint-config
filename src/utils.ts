import type { Linter } from 'eslint'

interface CreateESLintConfigOptions {
  configs: Linter.Config[]
  overrides: Linter.RulesRecord
}

export function createESLintConfig(options: CreateESLintConfigOptions): Linter.Config[] {
  return [...options.configs, { rules: options.overrides }]
}
