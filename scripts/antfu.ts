import config from '../antfu/eslint.config.mjs'

const c = (await config).find(it => it.name === 'antfu/stylistic/rules')

console.log(c?.plugins)
console.log(JSON.stringify(c?.rules ?? {}))
