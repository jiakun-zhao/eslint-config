import { fileURLToPath } from 'node:url'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  alias: {
    '@pkg': fileURLToPath(new URL('./package.json', import.meta.url)),
    '~': fileURLToPath(new URL('./src', import.meta.url)),
  },
  external: [
    '@typescript-eslint/types',
  ],
})
