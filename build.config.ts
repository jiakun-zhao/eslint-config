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
  alias: {
    '~': fileURLToPath(new URL('./src', import.meta.url)),
  },
})
