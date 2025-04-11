import type { Linter } from 'eslint'
import gitignore from 'eslint-config-flat-gitignore'
import stylistic from '~/plugins/stylistic'

export function defineConfig(options?: Linter.Config): Linter.Config[] {
  const {
    rules,
    ignores = [],
  } = options ?? {}

  return [
    stylistic,
    ...rules ? [{ name: 'overrides', rules }] : [],
    { name: 'ignores', ignores: [...ignores, ...gitignore().ignores, '**/pnpm-lock.yaml'] },

    {
      name: '',
      languageOptions: {

      },
    },
  ]
}
