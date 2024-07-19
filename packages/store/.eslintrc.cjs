/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    extends: [require.resolve('@3rapp/code/eslint/react')],
};
