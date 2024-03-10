import { homepageQuery } from "@/lib/sanity/queries";
import { client } from "@/studio/lib/client";
import { Metadata } from "next";
import type { SanityDocument } from "next-sanity";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MASON",
  description: "The homepage",
}

export default async function Home() {
  const homepageDoc = await client.fetch<SanityDocument>(homepageQuery);

  return (
    <div>
      <h1 className="text-6xl">Hello from <span>{homepageDoc.home.title}</span></h1>
    </div>
  );
}
