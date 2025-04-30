import { fileURLToPath } from 'node:url'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  alias: {
    '@pkg': fileURLToPath(new URL('./package.json', import.meta.url)),
    '~': fileURLToPath(new URL('./src', import.meta.url)),
  },
  clean: true,
  declaration: true,
  entries: [
    'src/index',
  ],
  externals: [
    '@typescript-eslint/types',
  ],
  rollup: {
    inlineDependencies: true,
  },
})
