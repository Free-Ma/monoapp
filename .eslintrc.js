/** @type {import("eslint").Linter.Config} */
module.exports = {
    ignorePatterns: ['apps/**', 'packages/**'],
    extends: [require.resolve('@strong/code/eslint/lib')],
    parserOptions: {
        project: true,
    },
};