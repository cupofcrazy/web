
import type { SanityDocument } from "next-sanity";
import { BlockContent } from "@/components/block-content";
import { aboutQuery } from "@/lib/sanity/queries";
import { client } from "@/studio/lib/client";


export default async function InfoPage() {
  const aboutPageDoc = await client.fetch<SanityDocument>(aboutQuery);

  return (
    <div>
      <h1 className="text-6xl">{aboutPageDoc.title}</h1>
      <BlockContent value={aboutPageDoc.content} />
    </div>
  )
}
