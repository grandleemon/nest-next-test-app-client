module.exports = {
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  root: true,
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
};
