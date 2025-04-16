import pluginAstro from 'eslint-plugin-astro'
import { runClassic, unindent } from 'eslint-vitest-rule-tester'
import { createSharedAstroConfig } from '~/configs/astro'
import rule, { name } from './astro-no-extra-lines'

const ValidCode = unindent
const InValidCode = unindent
const InValidFixCode = unindent

runClassic(
  name,
  rule,
  {
    valid: [
      ValidCode`
      ---
      ---
      `,
      ValidCode`
      ---
      const foo = 1
      ---`,
      ValidCode`
      ---
      const foo = 1
      ---`,
      ValidCode`
      ---
      const foo = 1
      ---
      
      <div></div>
      `,
      ValidCode`
      <div></div>
      <div></div>
      `,
    ].map(code => ({ code, filename: 'file.astro' })),

    invalid: [
      {
        code: '  <div></div>',
        output: '<div></div>',
        errors: [{ messageId: 'unexpectedLines' }],
      },
      {
        code: InValidCode`
        --- 
        
        ---
        `,
        output: InValidFixCode`
        ---
        ---
        `,
        only: true,
        errors: [{ messageId: 'unexpectedLines' }],
      },
      {
        code: InValidCode`
        ---

        const foo = 1
        ---
        `,
        output: InValidFixCode`
        ---
        const foo = 1
        ---
        `,
        errors: [{ messageId: 'unexpectedLines' }],
      },
      {
        code: InValidCode`
        ---
        const foo = 1

        ---
        `,
        output: InValidFixCode`
        ---
        const foo = 1
        ---
        `,
        errors: [{ messageId: 'unexpectedLines' }],
      },
      {
        code: InValidCode`
        ---
        const foo = 1
        ---


        <div></div>
        `,
        output: InValidFixCode`
        ---
        const foo = 1
        ---

        <div></div>
        `,
        errors: [{ messageId: 'unexpectedLines' }],
      },
      {
        code: InValidCode`
        ---
        const foo = 1

        ---


        <div></div>
        `,
        output: InValidFixCode`
        ---
        const foo = 1
        ---

        <div></div>
        `,
        errors: [{ messageId: 'unexpectedLines' }],
      },
      {
        code: InValidCode`
        ---
        const foo = 1
        
        ---


            <div></div>
        `,
        output: InValidFixCode`
        ---
        const foo = 1
        ---

        <div></div>
        `,
        errors: [{ messageId: 'unexpectedLines' }],
      },
      {
        code: InValidCode`
        ---
        const foo = 1
        ---

        <div></div>

        `,
        output: InValidFixCode`
        ---
        const foo = 1
        ---

        <div></div>
        `,
        errors: [{ messageId: 'unexpectedLines' }],
      },
    ].map(it => ({ ...it, filename: 'file.astro' })),
  },
  {
    configs: createSharedAstroConfig(pluginAstro),
  },
)
