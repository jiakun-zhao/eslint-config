module.exports = {
    extends: ['@antfu'],
    rules: {
        // antfu 配置覆盖，主要是 indent

        'indent': ['warn', 4],
        '@typescript-eslint/indent': ['warn', 4],
        'jsonc/indent': ['warn', 4],
        'vue/html-indent': ['warn', 4],
        'yml/indent': ['warn', 4],

        'brace-style': ['warn', '1tbs'],
        '@typescript-eslint/brace-style': ['warn', '1tbs'],

        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': 'off',
        'vue/static-class-names-order': 'warn',

        'no-console': 'warn',
    },
}
