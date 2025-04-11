import type { Linter } from 'eslint'
import { fileURLToPath } from 'node:url'
import stylistic from '@stylistic/eslint-plugin'
import typegen from 'eslint-typegen'

const dtsPath = fileURLToPath(new URL('../shims.d.ts', import.meta.url))

const configs: Linter.Config[] = [
  {
    name: 'style',
    plugins: {
      style: stylistic,
    },
  },
]

typegen(configs, { dtsPath })
