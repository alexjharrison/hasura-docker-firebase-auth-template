import fs from 'fs/promises'
import fetch from 'node-fetch'
import * as typescriptPlugin from '@graphql-codegen/typescript'
import { codegen } from '@graphql-codegen/core'
import { getIntrospectionQuery } from 'graphql'
import { loadSchema } from '@graphql-tools/load'
import { JsonFileLoader } from '@graphql-tools/json-file-loader'

fetch('http://localhost:3000/api/v1/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': process.env.HASURA_SECRET,
  },
  body: JSON.stringify({
    variables: {},
    query: getIntrospectionQuery({}),
  }),
})
  .then(result => result.json())
  .then(({ data }) => {
    console.log('Schema fetched')

    fs.writeFile('src/assets/schema/schema.json', JSON.stringify(data), 'utf-8')
      .then(() => console.log('schema.json written'))
      .then(createTypes)
      .catch(err => console.error('schema.json failed to write', err))
  })

async function createTypes() {
  const schema = await loadSchema('src/assets/schema/schema.json', {
    loaders: [new JsonFileLoader()],
  })

  const config = {
    filename: 'src/types.ts',
    schema: schema,
    plugins: [{ typescript: {} }],
    pluginMap: { typescript: typescriptPlugin },
  }

  const output = await codegen(config)

  fs.writeFile('src/types.ts', output, 'utf-8').then(() =>
    console.log('types.ts written')
  )
}
