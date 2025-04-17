import pluginAstro from 'eslint-plugin-astro'
import { run } from 'eslint-vitest-rule-tester'
import { createSharedAstroConfig } from '~/configs/astro'
import rule, { name } from './astro-multi-top-level-element-indent'

run({
  name,
  rule,
  ...createSharedAstroConfig(pluginAstro),

  valid: [
    '<div></div>',
    '---\n---\n\n<div></div>\n<div></div>',
    '<div></div>\n<div></div>',
  ].map(code => ({ code, filename: 'file.astro' })),

  invalid: [
    {
      code: '---\n---\n\n<div></div>\n  <div></div>',
      output: '---\n---\n\n<div></div>\n<div></div>',
    },
    {
      code: '---\n---\n\n<div></div>\n  <div></div>\n  <div></div>',
      output: '---\n---\n\n<div></div>\n<div></div>\n<div></div>',
    },
  ].map(it => ({ ...it, filename: 'file.astro', errors: [{ messageId: 'unexpectedSpace' }] })),
})
