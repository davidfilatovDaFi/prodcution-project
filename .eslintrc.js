module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
          '**/setupTests.ts',
          '**/setup.ts',
          '**/vitest.setup.ts',
        ],
      },
    ],
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: [
        'theme',
        'as',
        'role',
        'data-testid',
        'to',
        'target',
        'justify',
        'align',
        'border',
        'direction',
        'gap',
      ],
    }],
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    'jsx-quotes': ['error', 'prefer-single'],
    'implicit-arrow-linebreak': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/test/**/*.{ts,tsx}', 'config/**'],
      rules: {
        'i18next/no-literal-string': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
