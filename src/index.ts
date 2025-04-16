import type { Options } from '~/types'
import { composer } from 'eslint-flat-config-utils'
import { antfu } from '~/configs/antfu'
import { astro } from '~/configs/astro'
import { ignores } from '~/configs/ignores'
import { importX } from '~/configs/import-x'
import { javascript } from '~/configs/javascript'
import { jsonc } from '~/configs/jsonc'
import { perfectionist } from '~/configs/perfectionist'
import { regexp } from '~/configs/regexp'
import { stylistic } from '~/configs/stylistic'
import { typescript } from '~/configs/typescript'
import { unicorn } from '~/configs/unicorn'
import { unusedImports } from '~/configs/unused-imports'
import { vue } from '~/configs/vue'

export default function(options: Options = {}) {
  return composer(
    ignores(options),
    jsonc(),
    javascript(),
    typescript(),
    stylistic(),
    unusedImports(),
    perfectionist(),
    antfu(),
    importX(),
    unicorn(),
    regexp(),
    astro(),
    vue(),
  )
}
