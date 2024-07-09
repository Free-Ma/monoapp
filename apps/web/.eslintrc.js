/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    extends: [require.resolve('@strong/code/eslint/next')],
};
