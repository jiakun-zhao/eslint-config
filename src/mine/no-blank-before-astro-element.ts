import type { TSESTree } from '@typescript-eslint/types'
import { isDocumentStart, isLineStart, numOfLines } from '~/mine/utils'
import { createRule } from '~/utils'

export const name = 'no-blank-before-astro-element'

export default createRule({
  name,
  meta: {
    docs: {
      description: 'Enforce no blank before astro element',
    },
    schema: [],
    type: 'layout',
    fixable: 'whitespace',
    messages: {
      unexpectedBlank: 'Unexpected blank',
    },
  },
  create(context) {
    return {
      AstroFragment(node: TSESTree.JSXElement) {
        const token = context.sourceCode.getTokenBefore(node)
        // No frontmatter
        if (!token && !isDocumentStart(node)) {
          context.report({
            fix: (fixer) => fixer.removeRange([0, node.range[0]]),
            loc: { line: 0, column: 0 },
            messageId: 'unexpectedBlank',
          })
        }
        // Has frontmatter
        else if (token && token.value === '---' && (!isLineStart(node) || numOfLines(token, node) !== 2)) {
          context.report({
            fix: (fixer) => fixer.replaceTextRange([token.range[1], node.range[0]], '\n\n'),
            loc: { line: 0, column: 0 },
            messageId: 'unexpectedBlank',
          })
        }
      },
    }
  },
})
