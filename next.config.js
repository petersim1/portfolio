/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
const nextConfig = {
  reactStrictMode: true,
  // configure to include mdx files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}
 
module.exports = withMDX(nextConfig)