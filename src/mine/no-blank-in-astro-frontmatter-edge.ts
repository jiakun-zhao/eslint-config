import { numOfLines } from '~/mine/utils'
import { createRule } from '~/utils'

export const name = 'no-blank-in-astro-frontmatter-edge'

export default createRule({
  name,
  meta: {
    docs: {
      description: 'Enforce no blank in astro frontmatter start',
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
      Program(node) {
        const [first, next] = context.sourceCode.getFirstTokens(node, { count: 2 })
        if (first && first.value === '---' && next && next.loc.start.line !== 2) {
          context.report({
            fix: (fixer) => fixer.replaceTextRange([3, next.range[0]], '\n'),
            loc: { line: 0, column: 0 },
            messageId: 'unexpectedBlank',
          })
        }
      },
      AstroFragment(node) {
        const [left, right] = context.sourceCode.getTokensBefore(node, { count: 2 })
        if (
          left
          && left.value !== '---'
          && right
          && right.value === '---'
          && numOfLines(left, right) !== 1
        ) {
          context.report({
            fix: (fixer) => fixer.replaceTextRange([left.range[1], right.range[0]], '\n'),
            loc: { line: 0, column: 0 },
            messageId: 'unexpectedBlank',
          })
        }
      },
    }
  },
})
