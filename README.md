# @unnb/eslint-config

[@antfu/eslint-config](https://github.com/antfu/eslint-config)

#### Install

```bash
pnpm i -D @unnb/eslint-config
```

#### Config

Create `.eslintrc` file in your project root directory, and add the following content:

```json
{
    "extends": "@unnb"
}
```

Or add the following content to your `package.json`:

```json
{
    "eslintConfig": {
        "extends": "@unnb"
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
    "editor.formatOnSave": false
    // "prettier.enable": true,
}
```
