module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    //overrides: [
    //    {
    //        files: ["gulpfile.js"],
    //        rules: {
    //            "no-undef": "off",
    //            "@typescript-eslint/no-var-requires": "off",
    //        }
    //    }
    //]
};

