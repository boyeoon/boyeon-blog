import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = nextMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"],
  },
};

export default withMDX(nextConfig);