# @unnb/eslint-config

[@antfu/eslint-config](https://github.com/antfu/eslint-config)

#### Install

```bash
pnpm i -D @zhaojiakuncn/eslint-config
```

#### Config

Create `.eslintrc` file in your project root directory, and add the following content:

```json
{
    "extends": "@zhaojiakuncn"
}
```

Or add the following content to your `package.json`:

```json
{
    "eslintConfig": {
        "extends": "@zhaojiakuncn"
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
