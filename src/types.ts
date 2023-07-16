import type { ESLint, Linter, Rule } from 'eslint'

export type ESLintConfig = ESLint.ConfigData
export type ESLintRuleMetaModule = Rule.RuleModule
export type ESLintOverrideConfig<Rules extends Linter.RulesRecord = Linter.RulesRecord, OverrideRules extends Linter.RulesRecord = Rules> = Linter.ConfigOverride<OverrideRules>
