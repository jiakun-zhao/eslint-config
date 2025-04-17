import type { RuleDefinitionTypeOptions } from '@eslint/core'
import type { Arrayable, Nullable } from '@jiakun-zhao/utils'
import type { TSESTree } from '@typescript-eslint/types'
import type { Linter, SourceCode } from 'eslint'
import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'

export type FlatConfig<T = Linter.Config & { plugins?: any }> = Arrayable<Nullable<T>>

export interface Options {
  ignores?: string[]
  gitignore?: FlatGitignoreOptions
}

export type TSESNodes<NodeTypes = typeof TSESTree.AST_NODE_TYPES> =
  & { AstroFragment: TSESTree.JSXElement }
  & {
    [P in keyof NodeTypes]: TSESTree.Node & {
      type: NodeTypes[P]
    }
  }

export type RuleDefinitionOptions<MessageIds extends string = string> = RuleDefinitionTypeOptions & {
  Code: SourceCode;
  MessageIds: MessageIds;
  Node: TSESTree.Node;
  Visitor:
    & { [K in keyof TSESNodes]?: (node: TSESNodes[K]) => void }
    & { [K in keyof TSESNodes as `${K}:exit`]?: (node: TSESNodes[K]) => void };
}
