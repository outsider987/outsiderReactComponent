module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': ['google', 'plugin:storybook/recommended'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'plugins': ['@typescript-eslint','tailwindcss'],
  'rules': {}
};