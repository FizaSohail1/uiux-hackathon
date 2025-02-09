import { type SchemaTypeDefinition } from 'sanity'
import productSchema from './product'
import user from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,user],
}
