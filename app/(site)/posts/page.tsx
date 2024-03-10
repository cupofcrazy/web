import Link from "next/link";
import { client } from "@/studio/lib/client";
import { postsQuery } from "@/lib/sanity/queries";
import { CustomImage } from "@/components/custom-image";


const PostsPage = async () => {
  const posts = await client.fetch<any>(postsQuery);
  const formatNumber = (num: number) => num < 10 ? `0${num}` : num;

  return (
    <div>
      <h1 className="text-6xl mb-4">Posts ({`${formatNumber(posts.length)}`})</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post: any) => (
          <li key={post._id}>
            <Link href={`/posts/${post.slug.current}`}>
              <CustomImage 
                src={post.cover} 
                alt={post.cover.alt} 
                width={400} 
                height={300} 
                />
              <div className="mt-2 text-sm">
                <p className="text-neutral-900">{post.title}</p>
                <p className="text-neutral-500">{post.author.name}</p>
              </div>
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default PostsPage;