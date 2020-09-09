const path = require('path');

module.exports = {
    webpackFinal(config, options) {
        config.module.rules.map((rule) => {
            if (rule.test instanceof RegExp && rule.test.test('.scss')) {
                rule.use = [
                    ...rule.use,
                    {
                        loader: require.resolve('sass-resources-loader'),
                        options: {
                            resources: [
                                path.resolve(__dirname, '../assets/css/core/_global.scss')
                            ]
                        }
                    }
                ]
                return rule;

            }
            return rule;
        });

        config.resolve.alias = {
            ...config.resolve.alias,
            '~': path.resolve(__dirname, '../'),
            '@': path.resolve(__dirname, '../')
        }
        return config;
    },
    stories: [
        '../components/**/*.stories.@(ts|js|mdx)',
        '../storybook/**/*.stories.@(ts|js|mdx)',
    ],
    addons: [
        '@storybook/addon-docs',
        '@storybook/preset-scss',

]
}
