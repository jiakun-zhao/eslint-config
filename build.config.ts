import { fileURLToPath } from 'node:url'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  rollup: {
    inlineDependencies: true,
  },
  externals: [
    '@typescript-eslint/types',
  ],
  alias: {
    '~': fileURLToPath(new URL('./src', import.meta.url)),
    '@pkg': fileURLToPath(new URL('./package.json', import.meta.url)),
  },
})
