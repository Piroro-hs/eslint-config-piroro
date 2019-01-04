module.exports = {
  extends: [
    'plugin:react/recommended',
    'prettier/react',
    require.resolve('./index.js'),
  ],
  rules: {
    'react/jsx-filename-extension': ['error', {extensions: [".js", ".jsx"]}],
    'react/prop-types': 'off',
  }
};
