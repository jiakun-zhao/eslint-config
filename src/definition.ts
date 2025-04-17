export { default as pluginStylistic } from '@stylistic/eslint-plugin'
export { default as pluginTypescript } from '@typescript-eslint/eslint-plugin'
export { default as pluginAntfu } from 'eslint-plugin-antfu'
export { default as pluginCommand } from 'eslint-plugin-command'
export { default as pluginImportX } from 'eslint-plugin-import-x'
export { default as pluginJsonc } from 'eslint-plugin-jsonc'
export { default as pluginPerfectionist } from 'eslint-plugin-perfectionist'
export * as pluginRegExp from 'eslint-plugin-regexp'
export { default as pluginUnicorn } from 'eslint-plugin-unicorn'
export { default as pluginUnusedImports } from 'eslint-plugin-unused-imports'

export const indent = 2

export const ignores: string[] = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.svelte-kit',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/.yarn',
  '**/vite.config.*.timestamp-*',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
]

export const packageJsonTopLevelOrder: string[] = [
  'publisher',
  'name',
  'displayName',
  'type',
  'version',
  'private',
  'packageManager',
  'description',
  'author',
  'contributors',
  'license',
  'funding',
  'homepage',
  'repository',
  'bugs',
  'keywords',
  'categories',
  'sideEffects',
  'exports',
  'main',
  'module',
  'unpkg',
  'jsdelivr',
  'types',
  'typesVersions',
  'bin',
  'icon',
  'files',
  'engines',
  'activationEvents',
  'contributes',
  'scripts',
  'peerDependencies',
  'peerDependenciesMeta',
  'dependencies',
  'optionalDependencies',
  'devDependencies',
  'pnpm',
  'overrides',
  'resolutions',
  'husky',
  'simple-git-hooks',
  'lint-staged',
  'eslintConfig',
]
