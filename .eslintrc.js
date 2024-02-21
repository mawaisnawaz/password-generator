module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
  rules: {
    curly: ['error', 'all'],
    'prettier/prettier': 2,
    indent: 0,
    'prefer-const': 2,
    'no-var': 2,
    'object-shorthand': 2,
    '@typescript-eslint/no-use-before-define': [1],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    quotes: [2, 'single', { avoidEscape: true }],
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
