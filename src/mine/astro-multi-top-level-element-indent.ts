import type { TSESTree } from '@typescript-eslint/types'
import { createRule } from '~/utils'

export const name = 'astro-multi-top-level-element-indent'

export default createRule({
  name,
  meta: {
    docs: {
      description: 'Fix astro multi top level element indent',
    },
    schema: [],
    type: 'layout',
    fixable: 'whitespace',
    messages: {
      unexpectedSpace: 'Unexpected Space',
    },
  },
  create(context) {
    return {
      AstroFragment(node: TSESTree.JSXElement) {
        const children = node.children.filter(it => it.type === 'JSXElement' && it.loc.start.column !== 0)
        if (!children.length)
          return
        context.report({
          loc: { line: 0, column: 0 },
          messageId: 'unexpectedSpace',
          fix(fixer) {
            return children.map(it => {
              return fixer.removeRange([it.range[0] - it.loc.start.column, it.range[0]])
            })
          },
        })
      },
    }
  },
})
