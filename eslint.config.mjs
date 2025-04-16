import { fileURLToPath } from 'node:url'
import defineConfig from '@jiakun-zhao/eslint-config'
import typegen from 'eslint-typegen'

export default typegen(
  defineConfig(),
  {
    dtsPath: fileURLToPath(new URL('./shims.d.ts', import.meta.url)),
  },
)
