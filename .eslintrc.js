module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'eslint:recommended',
        '@nuxtjs/eslint-config-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
    ],
    plugins: [
        'vue',
        '@typescript-eslint/eslint-plugin',
        'eslint-plugin-tsdoc',
    ],
    // add your custom rules here
    rules: {
        'tsdoc/syntax': 'error',
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
        'space-before-function-paren': ['error', 'never'],
        semi: ['error', 'always', { omitLastInOneLineBlock: true }],
        eqeqeq: ['error', 'always'],
    },
};
