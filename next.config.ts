import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: every route is prerendered, so export plain HTML and
  // deploy zero serverless functions.
  output: "export",
};

export default nextConfig;
