/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        node: true,
        jest: true,
    },
    plugins: ['@typescript-eslint', 'jest', 'import', 'unused-imports', 'prettier'],
    extends: [
        // airbnb规范
        'airbnb-base',
        // 兼容typescript的airbnb规范
        'airbnb-typescript/base',
        // 支持jest
        'plugin:jest/recommended',
        './ts-base',
    ],
    ignorePatterns: [
        // 忽略的文件
        'node_modules/',
        'dist/',
    ],
    overrides: [
        {
            // 仅格式化.js、.jsx、.ts、.tsx、.json后缀的文件
            files: ['*.js?(x)', '*.ts?(x)', '*.json'],
        },
    ],
};
