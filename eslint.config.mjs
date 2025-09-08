import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      indent: ['warn', 2], // 2 spaces, warning level
      'no-extra-semi': 'warn', // Warn on unnecessary semicolons
    },
  }
  
];

export default eslintConfig;
