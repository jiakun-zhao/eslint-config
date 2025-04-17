import type { TSESTree } from '@typescript-eslint/types'

export function isDocumentStart(node: TSESTree.NodeOrTokenData) {
  return node.range[0] === 0
}

export function isLineStart(node: TSESTree.NodeOrTokenData) {
  return node.loc.start.column === 0
}

export function numOfLines(left: TSESTree.NodeOrTokenData, right: TSESTree.NodeOrTokenData) {
  return right.loc.start.line - left.loc.end.line
}
