module.exports = {
  overrides: [
    {
      files: [".prettierrc", ".eslintrc", "src/**/*.json"],
      options: { parser: "json" }
    }
  ]
};
