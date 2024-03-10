import { groq } from "next-sanity"

const imageQuery = groq`
  "image": image.asset->
`
const muxVideoQuery = groq`
  _type == "mux.video" => {
    asset->
  }
`
export const homepageQuery = groq`{
  "home": *[_type == "home"][0]
}
`

export const blockContentQuery = groq`
  content[] {
    ...,
    ${muxVideoQuery},
    ${imageQuery},
    _type == "slideshow" => {
      images[] {
        ${imageQuery}
      }
    }
  }
`

export const aboutQuery = groq`
 *[_type == "about"][0] {
  ...,
  content[] {
    ...,
    ${muxVideoQuery},
    ${imageQuery},
    _type == "slideshow" => {
      images[] {
        ${imageQuery}
      
      }
    }
    
  }
}
`

export const pageQuery = groq`
  *[_type == "page"]
`

export const siteSettingsQuery = groq`
  *[_type == "settings"][0]
`

export const postsQuery = groq`
  *[_type == "post"] {
    ...,
    "cover": cover.image.asset->,
    author->
  }
`

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    author->
  }
`