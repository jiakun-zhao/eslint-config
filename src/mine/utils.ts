import type { TSESTree } from '@typescript-eslint/types'
import type { AST } from 'eslint'
import type { TSESNodes } from '~/types'

export function isFileStart(node: TSESTree.NodeOrTokenData) {
  return node.range[0] === 0
}

export function isLineStart(node: TSESTree.NodeOrTokenData) {
  return node.loc.start.column === 0
}

export function numOfBlankLines(left: TSESTree.NodeOrTokenData, right: TSESTree.NodeOrTokenData) {
  return right.loc.start.line - left.loc.end.line
}

export function isFrontmatterToken(token?: AST.Token | null): token is AST.Token {
  return token?.value === '---'
}

export function isTypeOf<T extends TSESNodes>(node: any | undefined | null, type: keyof T): node is T {
  return node ? (node as any).type === type : false
}
