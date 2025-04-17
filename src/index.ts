import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { RuleOptions } from '../generated-rules'
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
import { unusedImports } from '~/configs/unused-imports'
import { vue } from '~/configs/vue'

export default function(options: Options = {}): FlatConfigComposer<Linter.Config<Linter.RulesRecord & RuleOptions>> {
  return composer(
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
    overrides(),
  ) as any
}
