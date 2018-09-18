module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:fp/recommended',
    'prettier',
  ],
  parser: 'babel-eslint',
  plugins: [
    'fp',
    'prettier',
  ],
  rules: {
    curly: ['error', 'all'],
    'no-confusing-arrow': 'off',
    'no-invalid-this': 'error',
    'no-nested-ternary': 'off',
    'no-use-before-define': ['error', {functions: false}],
    'fp/no-mutating-methods': 'warn',
    'fp/no-mutation': ['error', {
      commonjs: true,
      allowThis: true,
    }],
    'fp/no-events': 'off',
    'fp/no-nil': 'off',
    'fp/no-rest-parameters': 'off',
    'fp/no-unused-expression': 'off',
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': ['error', {
      printWidth: 100,
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: false,
    }]
  },
};
