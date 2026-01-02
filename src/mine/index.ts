import type { ESLint } from 'eslint'
import { version } from '@pkg'
import _astroMultiTopLevelElementIndent, { name as astroMultiTopLevelElementIndent } from './astro-multi-top-level-element-indent'
import _astroNoBlankBeforeAstroElement, { name as astroNoBlankBeforeAstroElement } from './astro-no-blank-before-root-element'
import _noNewlineInClosingTag, { name as noNewlineInClosingTag } from './no-newline-in-closing-tag'
import _noSpaceBeforeOpeningTag, { name as noSpaceBeforeOpeningTag } from './no-space-before-opening-tag'

const rules = {
  [astroMultiTopLevelElementIndent]: _astroMultiTopLevelElementIndent,
  [astroNoBlankBeforeAstroElement]: _astroNoBlankBeforeAstroElement,
  [noNewlineInClosingTag]: _noNewlineInClosingTag,
  [noSpaceBeforeOpeningTag]: _noSpaceBeforeOpeningTag,
}

export default {
  meta: {
    name: 'mine',
    version,
  },
  rules,
} satisfies ESLint.Plugin
