import pluginAstro from 'eslint-plugin-astro'
import { run } from 'eslint-vitest-rule-tester'
import { createSharedAstroConfig } from '~/configs/astro'
import rule, { name } from './no-space-in-closing-tag'

run({
  name,
  rule,
  ...createSharedAstroConfig(pluginAstro),
  valid: [
    '<div></div>',
  ].map(code => ({ code, filename: 'file.astro' })),
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
   ].map(it => ({ ...it, filename: 'file.astro' })),
})
