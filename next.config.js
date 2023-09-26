const withOptimizedImages = require('next-optimized-images').default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],
  },
};

module.exports = withOptimizedImages({
  ...nextConfig,
  // your config for next-optimized-images here, if any
});
