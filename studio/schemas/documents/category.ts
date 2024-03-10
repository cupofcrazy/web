import {defineField, defineType} from 'sanity'
import {StackCompactIcon} from '@sanity/icons'


export default defineType({
  name: 'category',
  title: 'Category',
  icon: StackCompactIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
