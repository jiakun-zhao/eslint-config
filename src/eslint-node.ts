import n from 'eslint-plugin-n'

import { defineConfig } from './utils'

export default defineConfig({
  name: 'node',
  plugins: { node: n },
  rules: {
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/prefer-global/buffer': ['error', 'never'],
    'node/prefer-global/process': ['error', 'never'],
    'node/process-exit-as-throw': 'error',
  },
})
