/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co', 'avatars.githubusercontent.com'], // Include both domains in a single array
  },
};

module.exports = nextConfig;
