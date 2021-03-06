const path = require('path');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'no-unused-vars': 'warn',
    semi: ['warn', 'always'],
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    indent: ['error', 2],
  },
};
