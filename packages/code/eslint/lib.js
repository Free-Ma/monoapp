/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        node: true,
    },
    extends: [
        // airbnb规范
        // https://www.npmjs.com/package/eslint-config-airbnb-base
        'airbnb-base',
        './base',
    ],
    ignorePatterns: [
        // 忽略的文件
        'node_modules/',
    ],
    overrides: [
        {
            // 仅格式化.js、.jsx、.json后缀的文件
            files: ['*.js?(x)', '*.json'],
        },
    ],
};
