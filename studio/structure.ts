import { type StructureBuilder } from "sanity/structure"
import { HomeIcon, InfoOutlineIcon } from '@sanity/icons'


export const structure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      S.divider(),
      S.listItem()
        .title('Index')
        .icon(HomeIcon)
        .child(
          S.document()
          .documentId('home')
          .schemaType('home')
        ),
      // S.divider(),
      ...S.documentTypeListItems()
        .filter(item => !['home', 'about', 'settings', 'media.tag'].includes(item.getId() as string)),
      S.listItem()
      .icon(InfoOutlineIcon)
      .title('Information')
      .child(
        S.document()
        .documentId('about')
        .schemaType('about')
      ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .showIcon(false)
        .child(
          S.document()
          .documentId('settings')
          .schemaType('settings')
        ),
    ])
}