module.exports = {
    ignoreFiles: ['*.scss'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss',
    ],
    plugins: ['stylelint-order'],
    rules: {
        indentation: 4,
        'at-rule-empty-line-before': [
            'always', {
              ignoreAtRules: ['each', 'import', 'include', 'first-nested', 'else', 'mixin'],
              ignore: ['after-comment', 'first-nested', 'inside-block']
            },
        ],
        'rule-empty-line-before': [
            'always', {
              except: ['inside-block'],
              ignore: ['after-comment']
            },
        ],
        'declaration-empty-line-before': 'never',
        'block-opening-brace-space-before': 'always',
        'comment-empty-line-before': 'always',
        'comment-no-empty': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-single-line-max-declarations': 1,
        'max-empty-lines': 1,
        'no-descending-specificity': null,
        'order/properties-order': [
            {
                groupName: 'position',
                emptyLineBefore: 'never',
                properties: [
                    'position',
                    'float',
                    'top',
                    'bottom',
                    'left',
                    'right',
                ],
            },
            {
                groupName: 'dimension',
                emptyLineBefore: 'never',
                properties: [
                    'display',
                    'box-sizing',
                    'width',
                    'height',
                    'margin',
                    'padding',
                ],
            },
            {
                groupName: 'font',
                emptyLineBefore: 'never',
                properties: [
                    'font-family',
                    'font-size',
                    'line-height',
                    'font-style',
                    'font-weight',
                    'white-space',
                    'word-break',
                    'word-wrap',
                    'text_overflow',
                    'text-decoration',
                    'color',
                ],
            },
            {
                groupName: 'decoration',
                emptyLineBefore: 'never',
                properties: ['border', 'background', 'transition', 'animation'],
            },
        ],
        'selector-max-universal': 0,
        'selector-pseudo-class-no-unknown': [
            true, {
                ignorePseudoClasses: ['export'],
            },
        ],
        'string-quotes': 'double',
    },
};
