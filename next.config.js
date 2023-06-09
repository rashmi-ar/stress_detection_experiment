/** @type {import('next').NextConfig} */
module.exports = {
//const nextConfig = {
  reactStrictMode: false,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false};

    return config;
  },
  swcMinify: true,
}

//export default nextConfig
