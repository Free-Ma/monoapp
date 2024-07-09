/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        node: true,
        browser: true,
    },
    plugins: ['@typescript-eslint', 'import', 'unused-imports', 'prettier'],
    extends: [
        // airbnb规范
        'airbnb',
        // 兼容typescript的airbnb规范
        'airbnb-typescript',
        // react hooks的airbnb规范
        'airbnb/hooks',
        'plugin:@next/next/recommended',
        './ts-base',
    ],
    ignorePatterns: ['node_modules/', 'dist/'],
    overrides: [
        {
            files: ['*.js?(x)', '*.ts?(x)', '*.json'],
        },
    ],
    rules: {
        /* ********************************** React and Hooks ********************************** */
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-no-useless-fragment': 0,
        'react/display-name': 0,
        'react/button-has-type': 0,
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        'react/destructuring-assignment': 0,
        'react/static-property-placement': 0,
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
        'react/function-component-definition': 0,
        'react-hooks/exhaustive-deps': 0,

        /* ********************************** jax-a11y ********************************** */
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
    },
};
