import { createRule } from '~/utils'

export const name = 'no-space-in-empty-block'

export default createRule({
  name,
  meta: {
    docs: {
      description: 'Enforce no space in empty object',
    },
    schema: [],
    type: 'layout',
    fixable: 'whitespace',
    messages: {
      unexpectedSpace: 'Unexpected space in empty object',
    },
  },
  create(context) {
    return {
      ObjectExpression(node) {
        if (node.properties.length)
          return
        const code = context.sourceCode.getText(node)
        const replaceValue = '{}'
        if (code !== replaceValue) {
          context.report({
            node,
            messageId: 'unexpectedSpace',
            * fix(fixer) {
              yield fixer.replaceText(node, replaceValue)
            },
          })
        }
      },
      ExportNamedDeclaration(node) {
        if (node.declaration || node.specifiers.length) {
          return
        }
        const code = context.sourceCode.getText(node)
        const replaceValue = 'export {}'
        if (code !== replaceValue) {
          context.report({
            node,
            messageId: 'unexpectedSpace',
            * fix(fixer) {
              yield fixer.replaceText(node, replaceValue)
            },
          })
        }
      },
    }
  },
})
