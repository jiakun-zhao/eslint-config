import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'warn',
    'style/brace-style': ['warn', '1tbs'],
    'ts/ban-ts-comment': 'off',
    'ts/no-unused-expressions': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'style/jsx-quotes': ['warn', 'prefer-single'],
    'style/jsx-one-expression-per-line': 'off',
  },
  ignores: [
    '**/rule-definition.ts',
  ],
  // formatters: {
  //   css: 'prettier',
  // },
  // vue: {
  //   overrides: {
  //     'vue/html-self-closing': 'off',
  //     'vue/singleline-html-element-content-newline': 'off',
  //   },
  // },
  // astro: true,
  // unocss: true,
})

// 'react/react-in-jsx-scope': 'off',
// 'react/no-unknown-property': 'off',
// 'react/self-closing-comp': 'off',
// 'react/destructuring-assignment': 'off',
// 'react/no-multi-comp': 'off',
// 'react/function-component-definition': 'off',
// 'react/display-name': 'off',
// 'react/button-has-type': 'off',
// 'react/no-children-prop': 'off',
// 'react/jsx-key': 'off',
// 'react/jsx-indent': ['error', 2],
// 'react/jsx-indent-props': ['error', 2],
// 'react/jsx-max-depth': 'off',
// 'react/jsx-filename-extension': 'off',
// 'react/jsx-no-literals': 'off',
// 'react/jsx-max-props-per-line': 'off',
// 'react/jsx-tag-spacing': ['error', { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'never' }],
// 'react/jsx-newline': 'off',
// 'react/jsx-one-expression-per-line': 'off',
// 'react/jsx-no-bind': 'off',
// 'react/jsx-curly-spacing': ['error', { when: 'never', children: { when: 'never' } }],
// 'react/jsx-closing-bracket-location': 'warn',

// 'jsonc/auto': ['off'],
// 'jsonc/no-comments': ['off'],
// 'jsonc/sort-array-values': ['off'],
// 'jsonc/sort-keys': ['error', 'asc'], // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html
// 'jsonc/vue-custom-block/no-parsing-error': ['off'],
// 'jsonc/array-bracket-newline': ['error', 'consistent'],
// 'jsonc/array-bracket-spacing': ['error', 'never'],
// 'jsonc/array-element-newline': ['error', 'consistent'],
// 'jsonc/indent': ['error', indent],
// 'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
