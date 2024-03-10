import { defineType, defineField } from 'sanity'
import { DocumentIcon, DocumentsIcon } from '@sanity/icons'
import { isUniqueAcrossAllDocuments } from '../../lib/unique'


export default defineType({
  name: 'page',
  title: 'Page',
  description: 'Dynamic page document',
  icon: DocumentsIcon,
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
        maxLength: 100,
        isUnique: isUniqueAcrossAllDocuments
      }
    }),
    defineField({
      name: 'seo',
      type: 'seo'
    }),
    defineField({
      name: 'content',
      type: 'blockContent'
    }),
    defineField({
      name: 'gallery',
      type: 'slideshow'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'seo.metaDescription',
      media: 'seo.ogImage'
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media: media || DocumentIcon
      }
    }
  }
})