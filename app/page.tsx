// import { Pagination } from "@/components/pagination";
// import { Posts } from "@/components/posts";
// import { getPaginatedPosts, postsPerPage } from "@/posts";

import React from "react";

export default async function Home() {
  // const { posts, total } = await getPaginatedPosts({ page: 1, limit: postsPerPage });

  return (
    <main className="p-16">
      <h1 className="flex justify-center text-[7rem]">Boyeon Jang</h1>
      {/* <Posts posts={posts} /> */}

      {/* <Pagination baseUrl="/page" page={1} perPage={postsPerPage} total={total} /> */}
    </main>
  );
}
