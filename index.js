module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:all',
    'plugin:fp/recommended',
    // 'plugin:import/warnings', TODO
    'prettier',
  ],
  parser: 'babel-eslint',
  plugins: ['fp', 'prettier'],
  rules: {
    eqeqeq: ['error', 'always', {null: 'ignore'}],
    'id-length': 'off',
    'init-declarations': 'off', // In favor of fp/no-let.
    'no-confusing-arrow': 'off',
    'no-magic-numbers': 'off',
    'no-nested-ternary': 'off',
    'no-ternary': 'off',
    'no-use-before-define': ['error', {functions: false}],
    'one-var': ['error', 'never'],
    'sort-imports': 'off',
    'fp/no-mutating-methods': 'warn',
    'fp/no-mutation': ['error', {commonjs: true, allowThis: true}],
    'fp/no-events': 'off',
    'fp/no-nil': 'off',
    'fp/no-rest-parameters': 'off',
    'fp/no-unused-expression': 'off',
    // 'import/extensions': ['error', 'never'],
    // 'import/no-extraneous-dependencies': 'off',
    // 'import/no-unresolved': 'off',
    'prettier/prettier': [
      'error',
      {printWidth: 100, singleQuote: true, trailingComma: 'all', bracketSpacing: false},
    ],
  },
};
