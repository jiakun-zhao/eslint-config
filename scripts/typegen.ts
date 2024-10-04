import { fileURLToPath } from 'node:url'
import typegen from 'eslint-typegen'
import plugins from '~/plugins'

typegen(
  plugins.map(it => ({ plugins: { [it.name ?? it.group]: it.plugin } })),
  {
    dtsPath: fileURLToPath(new URL('../src/rules.ts', import.meta.url)),
  },
)
