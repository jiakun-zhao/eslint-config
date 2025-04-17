import pluginAstro from 'eslint-plugin-astro'
import { run } from 'eslint-vitest-rule-tester'
import { createSharedAstroConfig } from '~/configs/astro'
import rule, { name } from './no-blank-before-astro-element'

run({
  name,
  rule,
  ...createSharedAstroConfig(pluginAstro),

  valid: [
    '<div></div>',
    '---\n---\n\n<div></div>',
    '---\nconst foo = 1\n---\n\n<div></div>',
  ].map(code => ({ code, filename: 'file.astro' })),

  invalid: [
    {
      code: '  <div></div>',
      output: '<div></div>',
      errors: [{ messageId: 'unexpectedBlank' }],
    },
    {
      code: '---\n---\n<div></div>',
      output: '---\n---\n\n<div></div>',
      errors: [{ messageId: 'unexpectedBlank' }],
    },
    {
      code: '---\n---\n\n  <div></div>',
      output: '---\n---\n\n<div></div>',
      errors: [{ messageId: 'unexpectedBlank' }],
    },
  ].map(it => ({ ...it, filename: 'file.astro' })),
})
