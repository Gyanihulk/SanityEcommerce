import {defineField, defineType} from 'sanity'
import { isUniqueAcrossAllDocuments } from '../isUnique'

export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      defineField({ 
        name: 'name',
        title: 'Name',
        type: 'string',
        validation:Rule=>Rule.required().min(8).max(80)
      }),
      defineField({ 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
          isUnique:isUniqueAcrossAllDocuments
        }
      }),
      defineField({ 
        name: 'phoneNumber',
        title: 'Phone Number',
        type: 'number',
      }),
      defineField({ 
        name: 'Address',
        title: 'Address',
        type: 'string',
      })
    ]
  })