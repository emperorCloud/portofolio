/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← génère un dossier 'out'
  images: {
    unoptimized: true, // nécessaire pour next/image en statique
  },
}

module.exports = nextConfig