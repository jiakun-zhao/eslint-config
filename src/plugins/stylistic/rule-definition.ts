import type { ESLint } from "eslint";
import braceStyle from "@stylistic/eslint-plugin/rules/brace-style";
import jsxQuotes from "@stylistic/eslint-plugin/rules/jsx-quotes";
import eolLast from "@stylistic/eslint-plugin/rules/eol-last";

export default {
  "brace-style": braceStyle,
  "jsx-quotes": jsxQuotes,
  "eol-last": eolLast
} satisfies NonNullable<ESLint.Plugin['rules']>