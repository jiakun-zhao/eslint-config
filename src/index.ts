import antfu from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'

export default antfu({
  stylistic: {
    overrides: {
      'no-console': 'warn',
      // typescript
      'ts/ban-ts-comment': 'off',
      // unused-imports
      'unused-imports/no-unused-imports': 'warn',
      // jsx
      'style/jsx-quotes': ['off', 'prefer-single'],
      'style/jsx-one-expression-per-line': 'off',
    },
  },
  vue: {
    overrides: {
      'vue/html-self-closing': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/static-class-names-order': 'warn',
    },
  },
  astro: isPackageExists('eslint-plugin-astro'),
}) as unknown

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
