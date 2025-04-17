import { fileURLToPath } from 'node:url'
import typegen from 'eslint-typegen'
import defineConfig from '../src/index'

export default typegen(
  defineConfig(),
  {
    dtsPath: fileURLToPath(new URL('../generated-rules.d.ts', import.meta.url)),
  },
)
