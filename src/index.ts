import { ESLint, Linter } from 'eslint'
import gitignore from 'eslint-config-flat-gitignore'
import globals from 'globals'
import * as plugins from '~/plugins'
import { Config, Rules } from '~/types'
// @ts-expect-error
import parser from '@typescript-eslint/parser'
import rules from '~/rules'

export default function (config: Config = {}): Linter.Config[] {
  function getRules<Key extends keyof Rules>(key: Key) {
    return Object.assign(rules[key], config.rules?.[key]) as Linter.RulesRecord
  }

  return [
    gitignore(config.gitignore),

    {
      name: 'javascript',
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2022,
          ...globals.node,
          window: 'readonly',
          document: 'readonly',
          navigator: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: getRules('eslint'),
    },

    {
      name: 'typescript',
      files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'],
      plugins: {
        typescript: plugins.TypeScript,
      },
      languageOptions: {
        parser,
        parserOptions: { sourceType: 'module' },
        sourceType: 'module',
      },
      rules: getRules('typescript'),
    },

    {
      name: 'import',
      plugins: {
        'import-x': plugins.ImportX,
        'unused-imports': plugins.UnusedImports,
        'perfectionist': plugins.Perfectionist,
      } as unknown as Record<string, ESLint.Plugin>,
      rules: {
        ...getRules('import-x'),
        ...getRules('unused-imports'),
        ...getRules('perfectionist'),
      },
    },

    {
      name: 'node',
      plugins: { node: plugins.Node },
      rules: getRules('node'),
    },

    {
      name: 'stylistic',
      plugins: { stylistic: plugins.Stylistic },
      rules: getRules('stylistic'),
    },
  ]
}
