import { isFrontmatterToken } from '~/mine/utils'
import { createRule } from '~/utils'

export const name = 'no-blank-in-astro-frontmatter-start'

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
        if (isFrontmatterToken(first) && next && next.loc.start.line !== 2) {
          context.report({
            fix: (fixer) => fixer.replaceTextRange([3, next.range[0]], '\n'),
            loc: { start: { line: 1, column: 0 }, end: next.loc.start },
            messageId: 'unexpectedBlank',
          })
        }
      },
    }
  },
})
