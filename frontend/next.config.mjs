const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "139.59.75.6",
        port: "1337",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
