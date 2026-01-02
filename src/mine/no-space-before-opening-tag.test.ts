import { run } from 'eslint-vitest-rule-tester'
import rule, { name } from './no-space-before-opening-tag'

run({
  name,
  rule,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  valid: [
    '<div></div>',
    '<div>content</div>',
    '<div>\ncontent</div>',
  ],
  invalid: [
    {
      code: '<div>  </div>',
      output: '<div></div>',
      errors: [{ messageId: 'unexpectedSpace' }],
    },
    {
      code: '<div>    content</div>',
      output: '<div>content</div>',
      errors: [{ messageId: 'unexpectedSpace' }],
    },
  ],
})
