import type { ESLint } from 'eslint'
import { version } from '@pkg'
import _noSpaceInEmptyObject, { name as noSpaceInEmptyObject } from './no-space-in-empty-block'

const rules = {
  [noSpaceInEmptyObject]: _noSpaceInEmptyObject,
}

export default {
  meta: {
    name: 'mine',
    version,
  },
  rules,
} satisfies ESLint.Plugin
