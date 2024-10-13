// Import the MDX plugin
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // MDX 플러그인 추가
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

// Use the MDX plugin
module.exports = withMDX(nextConfig);
