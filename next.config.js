/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this line to specify the output directory
  output: 'standalone',
  // Add this section to configure the favicon
  images: {
    unoptimized: true,
  },
}

export default nextConfig; 
