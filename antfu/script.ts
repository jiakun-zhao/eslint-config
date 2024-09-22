import antfu from '@antfu/eslint-config'

const config = await antfu()

console.log(config)

const n = config.find(it => it.name === 'antfu/perfectionist/setup')

console.log(n?.plugins)
console.log(JSON.stringify(n?.rules))
