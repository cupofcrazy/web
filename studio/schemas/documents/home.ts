import { defineType, defineField } from 'sanity'


export default defineType({
  name: 'home',
  title: 'Home',
  description: 'Homepage document',
  type: 'document',
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'SEO', name: 'SEO', },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'SEO',
      type: 'seo',
      group: 'SEO'

    })
  ],
})