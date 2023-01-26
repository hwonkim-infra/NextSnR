/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  reactStrictMode: true,
  env: {
      MONGODB_URI: "mongodb://127.0.0.1:27017/KRTA_REST"
  }
}
