import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { genImport, genObjectFromRawEntries, genTypeImport } from 'knitwork'
import { camelCase } from 'scule'
import rulesRecord from './rules'

genRulesDefinition()

async function genRulesDefinition() {
  const rules = Object.keys(rulesRecord)
  const imports: string[] = [genTypeImport('eslint', [{ name: 'ESLint' }])]
  const exports: [string, string][] = []

  rules.forEach((rule) => {
    const name = rule.slice(rule.indexOf('/') + 1)
    const key = camelCase(name)
    const specifier = `@stylistic/eslint-plugin/rules/${name}`
    imports.push(genImport(specifier, key))
    exports.push([name, key])
  })

  const code = `${imports.join('\n')}\n\nexport default ${genObjectFromRawEntries(exports)} satisfies NonNullable<ESLint.Plugin['rules']>`

  await writeFile(fileURLToPath(new URL('./rule-definition.ts', import.meta.url)), code)
}
