import { defineField, defineType } from "sanity"

export default defineType({
  name: 'a11yImage',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'alt',
      type: 'string',
      description: 'Descriptive alt text for image. Required for SEO purposes',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image.asset'
    },
  }
})