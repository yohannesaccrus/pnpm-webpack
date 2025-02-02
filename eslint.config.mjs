import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX support
        },
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-unused-vars': 'warn'
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {}, // TS absoulte import resolver
      },
    },
  },
  prettier,
  {
    ignores: ['node_modules', 'dist'], // Add files/directories to ignore
  },
];
