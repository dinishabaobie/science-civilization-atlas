import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath: "/science-civilization-atlas",
      trailingSlash: true,
      typescript: {
        tsconfigPath: "./tsconfig.pages.json",
      },
      turbopack: {
        root: process.cwd(),
      },
    }
  : {};

export default nextConfig;
