// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['**/dist/', 'yarn.lock/'],
    rules: {
      'quotes': [1, 'single'],
      'semi': [1, 'never'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'arrow-spacing': ['error', { before: true, after: true }],
      'space-before-blocks': 'error',
      'no-unused-vars': 0,
      'space-infix-ops': 2,
      'no-var': 0,
      'prefer-const': 2,
      'object-shorthand': 2,
      'no-trailing-spaces': 2,
      'no-undef': 0,
      'space-unary-ops': 1,
      'no-irregular-whitespace': 1,
      'no-multi-spaces': 1,
      'comma-spacing': [1, { 'before': false, 'after': true }],
      'no-whitespace-before-property': 1,
      'no-empty': 0,
      'no-redeclare': 0,
      'no-inner-declarations': 0,
      '@typescript-eslint/no-explicit-any': 0,
    }
  }
)