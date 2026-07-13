/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → Cloudflare Pages serves the `out/` folder, and the
  // dynamic booking endpoint runs as a Pages Function (functions/api/book.js).
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
