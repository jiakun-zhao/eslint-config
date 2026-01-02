import { run } from 'eslint-vitest-rule-tester'
import rule, { name } from './no-newline-in-closing-tag'

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
  ],
  invalid: [
    {
      code: '<div></div >',
      output: '<div></div>',
      errors: [{ messageId: 'unexpectedSpace' }],
    },
    {
      code: '<div></div\n>',
      output: '<div></div>',
      errors: [{ messageId: 'unexpectedSpace' }],
    },
  ],
})
