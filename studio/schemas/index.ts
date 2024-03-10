import home from './documents/home'
import about from './documents/about'
import post from './documents/post'
import page from './documents/page'
import settings from './documents/settings'
import category from './documents/category'
import author from './documents/author'

import blockContent from './objects/blockContent'
import seo from './objects/seo'

import slideshow from './modules/slideshow'
import type { SchemaTypeDefinition } from 'sanity'
import link from './objects/link'
import image from './objects/image'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    about,
    page,
    settings,
    post,
    author,
    category,
    blockContent,
    seo,
    slideshow,
    link,
    image
  ],
}
