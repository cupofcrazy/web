import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO data',
  // description: 'Page SEO data title, desc, image',
  type: 'object',
  fieldsets: [
    { name: 'SEO', title: 'SEO Data' }
  ],
  fields: [
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: (Rule) => Rule.max(155).warning('Should be under 155 characters')

    }),
    defineField({
      name: 'ogImage',
      title: 'OpenGraph Image',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
})