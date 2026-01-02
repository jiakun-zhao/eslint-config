import { createRule } from '~/utils'

export const name = 'no-space-in-closing-tag'

export default createRule({
  name,
  meta: {
    docs: {
      description: 'Enforce no space in closing tag',
    },
    schema: [],
    type: 'layout',
    fixable: 'whitespace',
    messages: {
      unexpectedSpace: 'Unexpected space in closing tag',
    },
  },
  create(context) {
    return {
      JSXClosingElement(node) {
        const code = context.sourceCode.getText(node)
        if (/\s/.test(code)) {
          context.report({
            fix: (fixer) => fixer.replaceText(node, code.replace(/\s+/g, '')),
            messageId: 'unexpectedSpace',
            node,
          })
        }
      }
    }
  },
})
