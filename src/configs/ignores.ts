/* eslint perfectionist/sort-objects: "warn" */

import type { FlatConfig, Options } from '~/types'
import gitignore from 'eslint-config-flat-gitignore'
import { ignores as antfuIgnores } from '~/definition'

export function ignores(options: Options): FlatConfig {
  return [
    gitignore({ ...options.gitignore, name: 'ignores/gitignore' }),
    { ignores: antfuIgnores, name: 'ignores/antfu' },
    options.ignores && { ignores: options.ignores, name: 'ignores' },
  ]
}
