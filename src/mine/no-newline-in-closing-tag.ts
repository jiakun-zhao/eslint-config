import { createRule } from '~/utils'

export const name = 'no-newline-in-closing-tag'

export default createRule({
  name,
  meta: {
    docs: {
      description: 'Enforce no newline in closing tag',
    },
    schema: [],
    type: 'layout',
    fixable: 'whitespace',
    messages: {
      unexpectedSpace: 'Unexpected newline in closing tag',
    },
  },
  create(context) {
    return {
      JSXClosingElement(node) {
        const code = context.sourceCode.getText(node)
        if (/\n/.test(code)) {
          context.report({
            fix: (fixer) => fixer.replaceText(node, code.replace(/\n/g, '')),
            messageId: 'unexpectedSpace',
            node,
          })
        }
      },
    }
  },
})
