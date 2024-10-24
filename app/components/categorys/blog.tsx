import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPosts, postsPerPage } from "@/posts";

import React from "react";

export default async function Blog() {
  const { posts, total } = await getPaginatedPosts({ page: 1, limit: postsPerPage });

  return (
    <main className="p-8">
      <Posts posts={posts} />

      <Pagination baseUrl="/page" page={1} perPage={postsPerPage} total={total} />
    </main>
  );
}
