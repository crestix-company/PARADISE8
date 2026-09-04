import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const githubPagesBasePath = '/PARADISE8';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  basePath: isGitHubPages ? githubPagesBasePath : undefined,
  trailingSlash: isGitHubPages,
  images: isGitHubPages
    ? { loader: 'custom', loaderFile: './lib/github-pages-image-loader.ts' }
    : undefined,
};

export default nextConfig;
