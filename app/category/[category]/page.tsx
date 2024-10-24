import { categories, type Category } from "@/categories";
import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import {
  getPaginatedPostsByCategory,
  postsPerPage,
} from "@/posts";
import { notFound } from "next/navigation";
import Blog from "@/components/categorys/blog";
import Project from "@/components/categorys/project"
import Resume from "@/components/categorys/resume"

export default async function Category({
  params,
}: {
  params: { category: Category };
}) {
  const { category } = params;

  // 404 if the category does not exist
  if (categories.indexOf(category) == -1) notFound();

  const { posts, total } = await getPaginatedPostsByCategory({
    category,
    page: 1,
    limit: postsPerPage,
  });

  return (
    <main>
      {/* <h1>Category: {category}</h1> */}

      {category === "Blog" && <Blog />}
      {category === "Project" && <Project />}
      {category === "Resume" && <Resume />}

      <Posts posts={posts} />

      <Pagination
        baseUrl={`/category/${category}/page`}
        page={1}
        perPage={postsPerPage}
        total={total}
      />
    </main>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}
