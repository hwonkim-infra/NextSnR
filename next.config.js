/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://127.0.0.1:3000/:path*`,
      },
    ];
  },
}

// module.exports = nextConfig
module.exports = {
  reactStrictMode: true,
  env: {
      MONGODB_URI: "mongodb://127.0.0.1:27017/KRTA_REST",
      BASE_URL: process.env.BASE_URL,

  }
}
