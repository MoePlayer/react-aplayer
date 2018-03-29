module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['src/**/*.json'],
      options: { parser: 'json' }
    },
    {
      files: ['src/**/*.css'],
      options: {
        tabWidth: 4
      }
    },
    {
      files: ['.*rc.js'],
      options: {
        trailingComma: 'none'
      }
    }
  ]
};
