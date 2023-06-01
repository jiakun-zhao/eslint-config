# @jiakun-zhao/eslint-config

#### Install

```bash
pnpm i -D @jiakun-zhao/eslint-config
```

#### Config

Create `.eslintrc` file in your project root directory, and add the following content:

```json
{
    "extends": "@jiakun-zhao"
}
```

Or add the following content to your `package.json`:

```json
{
    "eslintConfig": {
        "extends": "@jiakun-zhao"
    }
}
```

#### Config VS Code

Install VS Code `ESLint` extension and create `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false,
  // "prettier.enable": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "astro",
    "json",
    "jsonc",
    "json5",
    "html",
    "vue",
    "mdx"
  ]
}
```
