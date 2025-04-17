import pluginAstro from 'eslint-plugin-astro'
import { run } from 'eslint-vitest-rule-tester'
import { createSharedAstroConfig } from '~/configs/astro'
import rule, { name } from './no-blank-in-astro-frontmatter-edge'

run({
  name,
  rule,
  ...createSharedAstroConfig(pluginAstro),

  valid: [
    '---\n---',
    '---\n---\n\n<div></div>',
    '---\nconst foo = 1\n---',
    '---\nconst foo = 1\n---\n\n<div></div>',
    '<div></div>',
  ].map(code => ({ code, filename: 'file.astro' })),

  invalid: [
    {
      code: '---\n\n---',
      output: '---\n---',
    },
    {
      code: '---\n\nconst foo = 1\n---',
      output: '---\nconst foo = 1\n---',
    },
    {
      code: '---\n\n---\n\n<div></div>',
      output: '---\n---\n\n<div></div>',
    },
    {
      code: '---\nconst foo = 1\n\n---\n\n<div></div>',
      output: '---\nconst foo = 1\n---\n\n<div></div>',
    },
  ].map(it => ({ ...it, filename: 'file.astro', errors: [{ messageId: 'unexpectedBlank' }] })),

})
