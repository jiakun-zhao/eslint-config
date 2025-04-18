/* eslint perfectionist/sort-objects: "warn" */
/* cSpell:disable */

import type { FlatConfig } from '~/types'
import { indent } from '~/definition'
import { findDynamicPlugin, findParser, tsParser } from '~/utils'

export async function vue(): Promise<FlatConfig> {
  const pluginVue = await findDynamicPlugin('eslint-plugin-vue') as typeof import('eslint-plugin-vue')
  return pluginVue && {
    files: [
      '**/*.vue',
    ],
    languageOptions: {
      parser: findParser(pluginVue),
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: [
          '.vue',
        ],
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly',
        },
        parser: tsParser,
        sourceType: 'module',
      },
    },
    name: 'vue',
    plugins: {
      vue: pluginVue,
    },
    processor: pluginVue.processors?.['.vue'],
    rules: {
      ...pluginVue.configs['flat/essential'].map(c => c.rules).reduce((acc, cur) => ({ ...acc, ...cur }), {}) as any,

      'vue/attribute-hyphenation': 'warn',
      'vue/attributes-order': ['warn', { alphabetical: true, order: ['UNIQUE', 'DEFINITION', 'CONDITIONALS', 'LIST_RENDERING', 'GLOBAL', 'RENDER_MODIFIERS', 'SLOT', 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'CONTENT', 'ATTR_SHORTHAND_BOOL', 'ATTR_STATIC', 'ATTR_DYNAMIC', 'EVENTS'] }],
      'vue/block-order': ['warn', { order: ['script', 'template', 'style'] }],
      'vue/block-tag-newline': 'warn',
      'vue/component-name-in-template-casing': 'warn',
      'vue/component-options-name-casing': ['warn', 'PascalCase'],
      'vue/custom-event-name-casing': ['warn', 'kebab-case'],
      'vue/define-emits-declaration': 'warn',
      'vue/define-macros-order': 'warn',
      'vue/define-props-declaration': 'warn',
      'vue/first-attribute-linebreak': 'warn',
      'vue/html-button-has-type': 'warn',
      'vue/html-closing-bracket-newline': 'warn',
      'vue/html-closing-bracket-spacing': 'warn',
      'vue/html-comment-content-newline': 'warn',
      'vue/html-comment-content-spacing': 'warn',
      'vue/html-comment-indent': ['warn', indent],
      'vue/html-indent': ['warn', indent],
      'vue/html-quotes': 'warn',
      'vue/html-self-closing': ['warn', { html: { component: 'always', normal: 'never', void: 'never' }, math: 'always', svg: 'always' }],
      'vue/multi-word-component-names': 'off',
      'vue/mustache-interpolation-spacing': 'warn',
      'vue/no-import-compiler-macros': 'warn',
      'vue/no-multi-spaces': 'warn',
      'vue/no-ref-object-reactivity-loss': 'warn',
      'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
      'vue/no-static-inline-styles': 'warn',
      'vue/no-template-shadow': 'warn',
      'vue/no-template-target-blank': 'warn',
      'vue/no-unused-refs': 'warn',
      'vue/no-use-v-else-with-v-for': 'warn',
      'vue/no-useless-mustaches': 'warn',
      'vue/no-useless-v-bind': 'warn',
      'vue/padding-line-between-blocks': 'warn',
      'vue/prefer-separate-static-class': 'warn',
      'vue/prefer-true-attribute-shorthand': 'warn',
      'vue/prefer-use-template-ref': 'warn',
      'vue/require-macro-variable-name': 'warn',
      'vue/require-typed-ref': 'warn',
      'vue/slot-name-casing': ['warn', 'kebab-case'],
      'vue/static-class-names-order': 'warn',
      // 'vue/v-bind-style': ['warn', 'shorthand', { sameNameShorthand: 'always' }],
      'vue/v-bind-style': 'warn',
      'vue/v-for-delimiter-style': ['warn', 'of'],
      'vue/v-on-event-hyphenation': 'warn',
      'vue/v-on-handler-style': 'warn',
      'vue/v-on-style': 'warn',
      'vue/v-slot-style': 'warn',
    },
  }
}
