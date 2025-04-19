import type { Linter } from 'eslint'
import { fileURLToPath } from 'node:url'
import typegen from 'eslint-typegen'
import defineConfig from '../src'

export default typegen(
  defineConfig() as unknown as Linter.Config[],
  {
    dtsPath: fileURLToPath(new URL('../generated-rules.d.ts', import.meta.url)),
  },
)
