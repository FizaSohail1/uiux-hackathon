import { type SchemaTypeDefinition } from 'sanity'
import productSchema from './product'
import user from './user'
import shipment from './shipment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,user,shipment],
}
