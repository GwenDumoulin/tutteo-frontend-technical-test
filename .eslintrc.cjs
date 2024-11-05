module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
  };
  