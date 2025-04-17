import type { ESLint } from 'eslint'
import { version } from '@pkg'
import _astroMultiTopLevelElementIndent, { name as astroMultiTopLevelElementIndent } from './astro-multi-top-level-element-indent'
import _noBlankBeforeAstroElement, { name as noBlankBeforeAstroElement } from './no-blank-before-astro-element'
import _noBlankInAstroFrontmatterEdge, { name as noBlankInAstroFrontmatterEdge } from './no-blank-in-astro-frontmatter-edge'
import _noSpaceInEmptyObject, { name as noSpaceInEmptyObject } from './no-space-in-empty-block'

const rules = {
  [astroMultiTopLevelElementIndent]: _astroMultiTopLevelElementIndent,
  [noBlankBeforeAstroElement]: _noBlankBeforeAstroElement,
  [noBlankInAstroFrontmatterEdge]: _noBlankInAstroFrontmatterEdge,
  [noSpaceInEmptyObject]: _noSpaceInEmptyObject,
}

export default {
  meta: {
    name: 'mine',
    version,
  },
  rules,
} satisfies ESLint.Plugin
