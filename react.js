module.exports = {
  extends: [
    'airbnb',
    require.resolve('./index.js'),
  ],
  rules: {
    'react/jsx-filename-extension': ['error', {extensions: [".js", ".jsx"]}],
    'react/prop-types': 'off',
  }
};
