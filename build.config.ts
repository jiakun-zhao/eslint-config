import { fileURLToPath } from 'url'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
  alias: {
    '~': fileURLToPath(new URL('./src', import.meta.url)),
  },
})
