## @jiakun-zhao/eslint-config

> Extends [@antfu/eslint-config](https://github.com/antfu/eslint-config).

<br />
 
![npm](https://img.shields.io/npm/v/@jiakun-zhao/eslint-config?color=%236054ba)

#### Usage

1. Install the package

```bash
ni -D @jiakun-zhao/eslint-config
```

2. Add the following to your `package.json` file

```json
{
  "eslintConfig": {
    "extends": "@jiakun-zhao"
  }
}
```

3. Add the following to your `.vscode/settings.json` file

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
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```