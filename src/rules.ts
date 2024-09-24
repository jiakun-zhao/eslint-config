import { Rules } from '~/types'

const rules: Rules = {
  'eslint': {},
  'typescript': {},
  'unused-imports': {
    // eslint-plugin-unused-imports
    // 'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
  },
  'import-x': {
    // 'antfu/import-dedupe': 'error',
    // 'antfu/no-import-dist': 'error',
    // 'antfu/no-import-node-modules-by-path': 'error',
    'import-x/first': 'error',
    'import-x/no-duplicates': 'error',
    'import-x/no-mutable-exports': 'error',
    'import-x/no-named-default': 'error',
    'import-x/no-self-import': 'error',
    'import-x/no-webpack-loader-syntax': 'error',
    'import-x/newline-after-import': ['error', { count: 1 }],
  },
  'perfectionist': {
    'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
    'perfectionist/sort-imports': ['error', { groups: ['type', ['parent-type', 'sibling-type', 'index-type'], 'builtin', 'external', ['internal', 'internal-type'], ['parent', 'sibling', 'index'], 'side-effect', 'object', 'unknown'], newlinesBetween: 'ignore', order: 'asc', type: 'natural' }],
    'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
    'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
  },
  'stylistic': {
    'stylistic/array-bracket-spacing': ['error', 'never'],
    'stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'stylistic/arrow-spacing': ['error', { after: true, before: true }],
    'stylistic/block-spacing': ['error', 'always'],
    'stylistic/brace-style': ['warn', '1tbs'],
    'stylistic/comma-dangle': ['error', 'always-multiline'],
    'stylistic/comma-spacing': ['error', { after: true, before: false }],
    'stylistic/comma-style': ['error', 'last'],
    'stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
    'stylistic/dot-location': ['error', 'property'],
    'stylistic/eol-last': 'error',
    'stylistic/indent': ['error', 2, { ArrayExpression: 1, CallExpression: { arguments: 1 }, flatTernaryExpressions: false, FunctionDeclaration: { body: 1, parameters: 1 }, FunctionExpression: { body: 1, parameters: 1 }, ignoreComments: false, ignoredNodes: ['TSUnionType', 'TSIntersectionType', 'TSTypeParameterInstantiation', 'FunctionExpression > .params[decorators.length > 0]', 'FunctionExpression > .params > :matches(Decorator, :not(:first-child))'], ImportDeclaration: 1, MemberExpression: 1, ObjectExpression: 1, offsetTernaryExpressions: true, outerIIFEBody: 1, SwitchCase: 1, VariableDeclarator: 1 }],
    'stylistic/indent-binary-ops': ['error', 2],
    'stylistic/key-spacing': ['error', { afterColon: true, beforeColon: false }],
    'stylistic/keyword-spacing': ['error', { after: true, before: true }],
    'stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'stylistic/max-statements-per-line': ['error', { max: 1 }],
    'stylistic/member-delimiter-style': ['error', { multiline: { delimiter: 'none', requireLast: false }, multilineDetection: 'brackets', overrides: { interface: { multiline: { delimiter: 'none', requireLast: false } } }, singleline: { delimiter: 'comma' } }],
    'stylistic/multiline-ternary': ['error', 'always-multiline'],
    'stylistic/new-parens': 'error',
    'stylistic/no-extra-parens': ['error', 'functions'],
    'stylistic/no-floating-decimal': 'error',
    'stylistic/no-mixed-operators': ['error', { allowSamePrecedence: true, groups: [['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']] }],
    'stylistic/no-mixed-spaces-and-tabs': 'error',
    'stylistic/no-multi-spaces': 'error',
    'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'stylistic/no-tabs': 'error',
    'stylistic/no-trailing-spaces': 'error',
    'stylistic/no-whitespace-before-property': 'error',
    'stylistic/object-curly-spacing': ['error', 'always'],
    'stylistic/operator-linebreak': ['error', 'before'],
    'stylistic/padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
    'stylistic/quote-props': ['error', 'consistent-as-needed'],
    'stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true, avoidEscape: false }],
    'stylistic/rest-spread-spacing': ['error', 'never'],
    'stylistic/semi': ['error', 'never'],
    'stylistic/semi-spacing': ['error', { after: true, before: false }],
    'stylistic/space-before-blocks': ['error', 'always'],
    'stylistic/space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
    'stylistic/space-in-parens': ['error', 'never'],
    'stylistic/space-infix-ops': 'error',
    'stylistic/space-unary-ops': ['error', { nonwords: false, words: true }],
    'stylistic/spaced-comment': ['error', 'always', { block: { balanced: true, exceptions: ['*'], markers: ['!'] }, line: { exceptions: ['/', '#'], markers: ['/'] } }],
    'stylistic/template-curly-spacing': 'error',
    'stylistic/template-tag-spacing': ['error', 'never'],
    'stylistic/type-annotation-spacing': ['error', {}],
    'stylistic/type-generic-spacing': 'error',
    'stylistic/type-named-tuple-spacing': 'error',
    'stylistic/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'stylistic/yield-star-spacing': ['error', 'both'],
    'stylistic/jsx-closing-bracket-location': 'error',
    'stylistic/jsx-closing-tag-location': 'error',
    'stylistic/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
    'stylistic/jsx-curly-newline': 'error',
    'stylistic/jsx-curly-spacing': ['error', 'never'],
    'stylistic/jsx-equals-spacing': 'error',
    'stylistic/jsx-first-prop-new-line': 'error',
    'stylistic/jsx-function-call-newline': ['error', 'multiline'],
    'stylistic/jsx-indent-props': ['error', 2],
    'stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'stylistic/jsx-one-expression-per-line': 'off',
    'stylistic/jsx-quotes': ['warn', 'prefer-single'],
    'stylistic/jsx-tag-spacing': ['error', { afterOpening: 'never', beforeClosing: 'never', beforeSelfClosing: 'always', closingSlash: 'never' }],
    'stylistic/jsx-wrap-multilines': ['error', { arrow: 'parens-new-line', assignment: 'parens-new-line', condition: 'parens-new-line', declaration: 'parens-new-line', logical: 'parens-new-line', prop: 'parens-new-line', propertyValue: 'parens-new-line', return: 'parens-new-line' }],
  },
  'node': {
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/prefer-global/buffer': ['error', 'never'],
    'node/prefer-global/process': ['error', 'never'],
    'node/process-exit-as-throw': 'error',
  },
}

export default rules
