/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {backgroundImage: {
      'hero-img':"url('../public/images/banner-img.jpg')",
      'card-background':"url('../public/images/cardBackground.png')"
    }},
  },
  plugins: [],
}