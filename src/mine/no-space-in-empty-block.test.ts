import { runClassic } from 'eslint-vitest-rule-tester'
import rule, { name } from './no-space-in-empty-block'

runClassic(name, rule, {
  valid: [
    'const foo = {}',
    'const foo = { bar:0 }',
    'export {}',
    'const foo=0; export { foo }',
  ],
  invalid: [
    {
      code: 'const foo = {     }',
      output: 'const foo = {}',
      errors: [{ messageId: 'unexpectedSpace' }],
    },
    {
      code: 'export {     }',
      output: 'export {}',
      errors: [{ messageId: 'unexpectedSpace' }],
    },
  ],
})
