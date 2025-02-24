const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"], // Change "error" to "warn"
    },
  },
];

export default eslintConfig;
