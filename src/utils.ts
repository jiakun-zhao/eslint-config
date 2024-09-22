import type { Linter } from 'eslint'

export type FlatConfig = Linter.Config

export const defineConfig = (config: FlatConfig) => config
