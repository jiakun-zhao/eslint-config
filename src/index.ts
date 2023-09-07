import type { ESLint } from 'eslint'

export default <ESLint.ConfigData>{
  extends: [
    '@antfu',
    'plugin:react/recommended',
  ],
  rules: {
    'no-console': 'warn',
    'brace-style': ['warn', '1tbs'],
    '@typescript-eslint/brace-style': ['warn', '1tbs'],
    '@typescript-eslint/ban-ts-comment': ['off'],

    // imports
    'unused-imports/no-unused-imports': 'warn',

    // vue
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/static-class-names-order': 'warn',

    // react & jsx
    'jsx-quotes': ['error', 'prefer-single'],

    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off',
    'react/self-closing-comp': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-multi-comp': 'off',
    'react/function-component-definition': 'off',
    'react/display-name': 'off',
    'react/button-has-type': 'off',
    'react/no-children-prop': 'off',
    'react/jsx-key': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-depth': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-tag-spacing': ['error', { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'never' }],
    'react/jsx-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-curly-spacing': ['error', { when: 'never', children: { when: 'never' } }],
  },
}
