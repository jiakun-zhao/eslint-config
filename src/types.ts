import type { RulesMeta } from '@eslint/core'
import type { Arrayable, Nullable } from '@jiakun-zhao/utils'
import type { RuleContext, RuleListener } from '@typescript-eslint/utils/ts-eslint'
import type { Linter } from 'eslint'
import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'

export { TSESTree as Tree } from '@typescript-eslint/types'

export type FlatConfig<T = Linter.Config & { plugins?: any }> = Arrayable<Nullable<T>>

export interface CustomRule<MessageIds extends string = string> {
  name: string
  meta: RulesMeta<MessageIds>
  create: (content: Readonly<RuleContext<MessageIds, unknown[]>>) => RuleListener
}

export interface Options {
  ignores?: string[]
  gitignore?: FlatGitignoreOptions
}
