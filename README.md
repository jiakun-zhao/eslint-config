## @jiakun-zhao/eslint-config

![NPM Version](https://img.shields.io/npm/v/@jiakun-zhao/eslint-config?labelColor=%23000&color=%23954)
![NPM Version](https://img.shields.io/npm/l/@jiakun-zhao/eslint-config?labelColor=%23000&color=%23954)

Personal style eslint configuration.

<details>

<summary>Usage</summary>

#### Install

```bash
pnpm i -D @jiakun-zhao/eslint-config
```

#### Config

Create `eslint.config.mjs` file in your project root directory, and add the following content:

```js
import defineConfig from '@jiakun-zhao/eslint-config'

export default defineConfig()
```

#### VS Code

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
</details>

#### LICENSE

MIT License © 2025-PRESENT [Jiakun Zhao](https://github.com/jiakun-zhao)
