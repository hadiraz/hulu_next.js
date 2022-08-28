/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : [
      "links.papareact.com" ,
      "image.tmdb.org" ,
      "press.hulu.com"
    ]
  } ,
}

module.exports = nextConfig
