/* eslint perfectionist/sort-objects: "warn" */
/* cSpell:disable */

import type { FlatConfig } from '~/types'
import { indent, pluginStylistic } from '~/definition'

export function stylistic(): FlatConfig {
  return {
    name: 'stylistic',
    plugins: {
      style: pluginStylistic,
    },
    rules: {
      'style/array-bracket-newline': ['warn', 'consistent'],
      'style/array-bracket-spacing': 'warn',
      'style/arrow-spacing': 'warn',
      'style/block-spacing': 'warn',
      'style/comma-dangle': ['warn', 'always-multiline'],
      'style/comma-spacing': 'warn',
      'style/comma-style': 'warn',
      'style/curly-newline': 'warn',
      'style/eol-last': 'warn',
      'style/function-call-spacing': 'warn',
      'style/implicit-arrow-linebreak': 'warn',
      'style/indent': ['warn', indent],
      'style/indent-binary-ops': ['warn', indent],
      'style/jsx-child-element-spacing': 'warn',
      'style/jsx-closing-bracket-location': 'warn',
      'style/jsx-closing-tag-location': 'warn',
      'style/jsx-curly-brace-presence': 'warn',
      'style/jsx-curly-newline': 'warn',
      'style/jsx-curly-spacing': ['warn', { children: true, when: 'never' }],
      'style/jsx-equals-spacing': 'warn',
      'style/jsx-max-props-per-line': 'off',
      'style/jsx-pascal-case': 'warn',
      'style/jsx-quotes': 'warn',
      'style/jsx-self-closing-comp': ['warn', { component: true, html: false }],
      'style/jsx-tag-spacing': 'warn',
      'style/jsx-wrap-multilines': 'warn',
      'style/key-spacing': 'warn',
      'style/keyword-spacing': 'warn',
      'style/no-mixed-spaces-and-tabs': 'warn',
      'style/no-multi-spaces': 'warn',
      'style/no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],
      'style/no-trailing-spaces': 'warn',
      'style/no-whitespace-before-property': 'warn',
      'style/nonblock-statement-body-position': ['warn', 'below'],
      'style/object-curly-newline': ['warn', { consistent: true }],
      'style/object-curly-spacing': ['warn', 'always'],
      'style/operator-linebreak': ['warn', 'before'],
      'style/quote-props': ['warn', 'consistent-as-needed'],
      'style/quotes': ['warn', 'single'],
      'style/rest-spread-spacing': 'warn',
      'style/semi': ['warn', 'never'],
      'style/semi-spacing': 'warn',
      'style/space-before-blocks': 'warn',
      'style/space-before-function-paren': ['warn', 'never'],
      'style/space-in-parens': 'warn',
      'style/space-infix-ops': 'warn',
      'style/space-unary-ops': 'warn',
      'style/spaced-comment': ['warn', 'always', { block: { balanced: true } }],
      'style/type-annotation-spacing': 'warn',
      'style/type-generic-spacing': 'warn',
      'style/type-named-tuple-spacing': 'warn',
    },
  }
}
