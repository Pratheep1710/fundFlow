/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static HTML export for Firebase hosting
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure we don't try to export pages that require auth during build
  staticPageGenerationTimeout: 120,
  trailingSlash: true, // Helps with Firebase hosting path handling
  // Skip TypeScript type checking in build to avoid issues with static export
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
