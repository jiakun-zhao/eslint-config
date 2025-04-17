import type { FlatConfig } from '~/types'
import { packageJsonTopLevelOrder } from '~/definition'

export function overrides(): FlatConfig {
  const configFileNames = ['eslint', 'astro', 'vite', 'build', 'uno', 'unocss', 'vitest']
  const extensions = ['js', 'mjs', 'cjs', 'ts', 'mts', 'cts']
  return [
    {
      name: 'override/sort-config-files',
      files: [
        ...configFileNames.reduce(
          (acc, cur) => acc.concat(...extensions.map(ext => `${cur}.config.${ext}`)),
          [] as string[],
        ),
      ],
      rules: {
        'perfectionist/sort-objects': 'warn',
      },
    },
    {
      name: 'override/jsonc-sort',
      files: [
        '**/.vscode/settings.json',
        '**/tsconfig.json',
      ],
      rules: {
        'jsonc/sort-array-values': ['warn', { order: { type: 'asc' }, pathPattern: '.*' }],
        'jsonc/sort-keys': ['warn', { order: { type: 'asc' }, pathPattern: '.*' }],
      },
    },
    {
      name: 'override/package-json',
      files: [
        '**/package.json',
      ],
      rules: {
        'style/no-multiple-empty-lines': ['warn', { max: 0 }],
        'jsonc/sort-array-values': [
          'warn',
          { order: { type: 'asc' }, pathPattern: '^files$' },
        ],
        'jsonc/sort-keys': [
          'warn',
          { order: packageJsonTopLevelOrder, pathPattern: '^$' },
          { order: { type: 'asc' }, pathPattern: '^(?:exports|scripts)' },
          /* cSpell:disable-next-line */
          { order: { type: 'asc' }, pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$' },
        ],
      },
    },
  ]
}
