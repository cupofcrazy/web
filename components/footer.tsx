import { client } from "@/studio/lib/client"
import { type SanityDocument, groq } from "next-sanity"

export const Footer = async () => {
  const footerQuery = groq`*[_type == "settings"][0] {
    ...
  }
  `
  const data = await client.fetch<SanityDocument>(footerQuery)

  return (
    <footer className="px-4 py-4 flex justify-between items-end w-full">
      <div>
        <p>Always Relevant</p>
        <p className="uppercase text-6xl">{data.title}</p>
      </div>
      
      <p>{ new Date().getFullYear() }</p>
    </footer>
  )
}
