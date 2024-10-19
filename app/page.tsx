import { categories } from "@/categories";
import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPosts, postsPerPage } from "@/posts";
import DarkMode from "@/components/darkmode";

import React from "react";

export default async function Home() {
  const { posts, total } = await getPaginatedPosts({ page: 1, limit: postsPerPage });

  return (
    <main className="max-w-3xl px-4 mx-auto">
      <h1>Boyeon Jang</h1>
      <Posts posts={posts} />

      <Pagination baseUrl="/page" page={1} perPage={postsPerPage} total={total} />

      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <a href={`category/${cat}`}>{cat}</a>
          </li>
        ))}
      </ul>
      <DarkMode />
    </main>
  );
}
