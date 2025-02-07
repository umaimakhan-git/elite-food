import { type SchemaTypeDefinition } from 'sanity'
import food from './foods'
import chef from './chefs'
import blog from './blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef, blog],
}
