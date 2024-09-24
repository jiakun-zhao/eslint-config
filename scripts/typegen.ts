import { writeFile } from 'fs/promises'
import { join } from 'path'
import { fileURLToPath } from 'url'
import typegen from 'eslint-typegen'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import { kebabCase } from 'scule'

const dir = fileURLToPath(new URL('../src/types', import.meta.url))

await typegen([], { includeCoreRules: true, dtsPath: join(dir, 'rules', 'eslint.ts') })

await import('../src/plugins').then((plugins) => {
  const tasks = Object.keys(plugins).map(async (key) => {
    const name = kebabCase(key).replace('-script', 'script')
    const exportTypeName = key + 'Rules'
    const fileName = name + '.ts'
    const filePath = join(dir, 'rules', fileName)
    const dts = await pluginsToRulesDTS({ [name]: plugins[key] }, { includeAugmentation: false, exportTypeName })
    await writeFile(filePath, dts, 'utf-8')
  })
  return Promise.all(tasks)
})
