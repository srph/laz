const nextConfig = {
  // reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET
  }
}

module.exports = nextConfig
