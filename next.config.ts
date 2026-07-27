import type { NextConfig } from "next";

const isCloudflarePages =
  process.env.CF_PAGES === "1" ||
  process.env.CLOUDFLARE_PAGES === "true";
const isGitHubPages =
  process.env.GITHUB_PAGES === "true" && !isCloudflarePages;
const isStaticExport = isGitHubPages || isCloudflarePages;

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      ...(isGitHubPages
        ? { basePath: "/science-civilization-atlas" }
        : {}),
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
