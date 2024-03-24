/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  quoteProps: 'consistent',
  printWidth: 100,
  plugins: ['prettier-plugin-astro', '@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/lib/(.*)$',
    '^~/components/(.*)$',
    '^~/(.*)$',
    '^[./]',
    '',
    '<TYPES>',
    '<TYPES>^[.]'
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
