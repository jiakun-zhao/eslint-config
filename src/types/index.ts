import { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'
import { RuleOptions as ESLintRules } from '~/types/rules/eslint'
import { ImportXRules } from '~/types/rules/import-x'
import { NodeRules } from '~/types/rules/node'
import { PerfectionistRules } from '~/types/rules/perfectionist'
import { StylisticRules } from '~/types/rules/stylistic'
import { TypeScriptRules } from '~/types/rules/typescript'
import { UnusedImportsRules } from '~/types/rules/unused-imports'

export interface Rules {
  'eslint': ESLintRules
  'typescript': TypeScriptRules
  'unused-imports': UnusedImportsRules
  'perfectionist': PerfectionistRules
  'import-x': ImportXRules
  'stylistic': StylisticRules
  'node': NodeRules
}

export interface Config {
  gitignore?: FlatGitignoreOptions
  rules?: Partial<Rules>
}
