import type { ESLint } from 'eslint'
import { version } from '@pkg'
import _noBlankBeforeAstroElement, { name as noBlankBeforeAstroElement } from './no-blank-before-astro-element'
import _noBlankInAstroFrontmatterStart, { name as noBlankInAstroFrontmatterStart } from './no-blank-in-astro-frontmatter-start'
import _noSpaceInEmptyObject, { name as noSpaceInEmptyObject } from './no-space-in-empty-block'

const rules = {
  [noSpaceInEmptyObject]: _noSpaceInEmptyObject,
  [noBlankBeforeAstroElement]: _noBlankBeforeAstroElement,
  [noBlankInAstroFrontmatterStart]: _noBlankInAstroFrontmatterStart,
}

export default {
  meta: {
    name: 'mine',
    version,
  },
  rules,
} satisfies ESLint.Plugin
