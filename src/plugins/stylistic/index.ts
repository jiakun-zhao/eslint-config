import type { Linter } from 'eslint'
import ruleDefinition from './rule-definition'
import rules from './rules'

export default {
  name: 'style',
  plugins: {
    style: {
      rules: ruleDefinition,
    },
  },
  rules,
} satisfies Linter.Config
