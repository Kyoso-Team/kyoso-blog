/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  quoteProps: 'consistent',
  printWidth: 100,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
