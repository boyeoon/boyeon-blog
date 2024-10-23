import { type Post } from "@/posts";
import Link from "next/link";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ol>
      {/* {posts.map(({ slug, title, publishDate, categories }) => ( */}
      {posts.map(({ slug, title, publishDate }) => (
        <li key={slug}>
          <h2 className="mb-0">
            <Link href={`/${slug}`}>{title}</Link>
          </h2>
          <p className="pl-1">
            {/* <strong>Published:</strong>{" "} */}
            {new Date(publishDate).toLocaleDateString()}{" "}
            {/* <strong>Categories:</strong>{" "}
            {categories.map((cat, i) => `${i ? ", " : ""}${cat}`)} */}
          </p>
        </li>
      ))}
    </ol>
  );
}
