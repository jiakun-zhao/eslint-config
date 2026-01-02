import { createRule } from '~/utils'

export const name = 'no-space-before-opening-tag'

export default createRule({
  name,
  meta: {
    docs: {
      description: 'Enforce no space before opening tag',
    },
    schema: [],
    type: 'layout',
    fixable: 'whitespace',
    messages: {
      unexpectedSpace: 'Unexpected space before opening tag',
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const afterToken = context.sourceCode.getTokenAfter(node)
        if (afterToken?.value.startsWith(' ')) {
          context.report({
            fix: (fixer) => fixer.replaceText(afterToken, afterToken.value.trimStart()),
            messageId: 'unexpectedSpace',
            node,
          })
        }
      },
    }
  },
})
