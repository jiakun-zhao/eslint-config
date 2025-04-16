import type { Tree } from '~/types'
import { createRule } from '~/utils'

export const name = 'astro-no-extra-lines'

export default createRule({
  name,
  meta: {
    docs: {
      description: 'Enforce no extra lines',
    },
    schema: [],
    type: 'layout',
    fixable: 'whitespace',
    messages: {
      unexpectedLines: 'Unexpected lines',
    },
  },
  create(context) {
    return {
      AstroFragment(node: Tree.JSXElement) {
        // ERROR: AstroFragment 的爹永远是 Program, 但我要睡觉了
        if (node.parent.type === 'Program' && node.range[0] !== 0) {
          context.report({
            fix: (fixer) => fixer.removeRange([0, node.range[0]]),
            messageId: 'unexpectedLines',
            loc: { start: { line: 1, column: 0 }, end: node.loc.start },
          })
        }
      },
      Program(node) {
        if (!node.body.length && node.tokens?.length === 2 && node.tokens![1].range[0] !== 4) {
          context.report({
            fix: (fixer) => fixer.replaceTextRange([0, node.tokens![1].range[1]], '---\n---'),
            messageId: 'unexpectedLines',
            node,
          })
        }

        return

        const tokens = context.sourceCode.getTokens(node)
        const startToken = tokens[0]
        const hasFrontMatter = startToken.value === '---'

        if (tokens.length === 2) {
          const endToken = tokens[1]
          const startTokenRight = startToken.range[1]
          const endTokenLeft = endToken.range[0]
          if (hasFrontMatter && endTokenLeft - startTokenRight >= 2) {
            context.report({
              fix: (fixer) => fixer.removeRange([startTokenRight + 1, endTokenLeft]),
              messageId: 'unexpectedLines',
              loc: { start: startToken.loc.end, end: endToken.loc.start },
            })
          }
        } else if ((node.body[0].type as string) !== 'AstroFragment') {
          const endNode = node.body[0]
          const startTokenRight = startToken.range[1]
          const endTokenLeft = endNode.range[0]
          if (hasFrontMatter && endTokenLeft - startTokenRight >= 2) {
            context.report({
              fix: (fixer) => fixer.removeRange([startTokenRight + 1, endTokenLeft]),
              messageId: 'unexpectedLines',
              loc: { start: startToken.loc.end, end: endNode.loc.start },
            })
          }
        }
      },
    }
  },
})
