import { defineType, defineField } from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'


export default defineType({
  name: 'about',
  title: 'About',
  description: 'About document',
  icon: InfoOutlineIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      }
    }),
    defineField({
      name: 'seo',
      type: 'seo'
    }),
    defineType({
      name: 'content',
      type: 'blockContent'
    })
  ]
})