/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:astro/recommended', 'plugin:tailwindcss/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'quotes': ['warn', 'single', { avoidEscape: true }],
        'semi': ['warn', 'always'],
        'no-var': 'warn',
        'brace-style': ['warn', '1tbs'],
        'comma-dangle': ['warn', 'never'],
        'default-case': 'error',
        'prefer-const': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        'quote-props': ['warn', 'consistent'],
        'unused-export-let': 'off'
      }
    }
  ]
};
