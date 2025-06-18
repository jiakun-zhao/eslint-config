import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { Options } from '~/types'
import { composer } from 'eslint-flat-config-utils'
import { antfu } from '~/configs/antfu'
import { astro } from '~/configs/astro'
import { command } from '~/configs/command'
import { ignores } from '~/configs/ignores'
import { importX } from '~/configs/import-x'
import { javascript } from '~/configs/javascript'
import { jsonc } from '~/configs/jsonc'
import { mine } from '~/configs/mine'
import { overrides } from '~/configs/overrides'
import { perfectionist } from '~/configs/perfectionist'
import { regexp } from '~/configs/regexp'
import { stylistic } from '~/configs/stylistic'
import { typescript } from '~/configs/typescript'
import { unicorn } from '~/configs/unicorn'
import { unocss } from '~/configs/unocss'
import { unusedImports } from '~/configs/unused-imports'
import { vue } from '~/configs/vue'
import { pluginOxlint } from '~/definition'

export default function(options: Options = {}): FlatConfigComposer {
  const result = composer(
    ignores(options),
    jsonc(),
    javascript(),
    typescript(),
    astro(),
    vue(),
    stylistic(),
    mine(),
    unusedImports(),
    perfectionist(),
    antfu(),
    importX(),
    unicorn(),
    regexp(),
    command(),
    unocss(),
    overrides(),
  )

  return options.oxlint?.enable === true
    ? result.append(pluginOxlint.configs['flat/all'])
      .remove('oxlint/vue-svelte-exceptions')
      .renamePlugins({ '@typescript-eslint': 'ts', 'import-x': 'import' })
    : result
}
