import type { ESLint } from 'eslint'
import { version } from '@pkg'
import _multiRootElementIndent, { name as multiRootElementIndent } from './multi-root-element-indent'
import _noBlankBeforeAstroElement, { name as noBlankBeforeAstroElement } from './no-blank-before-astro-element'
import _noBlankInAstroFrontmatterEdge, { name as noBlankInAstroFrontmatterEdge } from './no-blank-in-astro-frontmatter-edge'
import _noSpaceInEmptyObject, { name as noSpaceInEmptyObject } from './no-space-in-empty-block'

const rules = {
  [noSpaceInEmptyObject]: _noSpaceInEmptyObject,
  [noBlankBeforeAstroElement]: _noBlankBeforeAstroElement,
  [noBlankInAstroFrontmatterEdge]: _noBlankInAstroFrontmatterEdge,
  [multiRootElementIndent]: _multiRootElementIndent,
}

export default {
  meta: {
    name: 'mine',
    version,
  },
  rules,
} satisfies ESLint.Plugin
