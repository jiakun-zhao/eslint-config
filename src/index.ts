import $import from './eslint-import'
import $node from './eslint-node'
import { FlatConfig } from './utils'

const config: FlatConfig[] = [
  $node,
  $import,
]

export default config
