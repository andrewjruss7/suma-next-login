/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'red-suma': '#c53230',
      'white-suma': '#EAF2F7',
      'green-suma': '#d8e8e5',
      'button-color': '#f0474a',
      'font-blue': '#27314a',
      'font-white': '#f0f0f0',
      'font-red': '#c53230',
      'color-black': '#000000'
    },
    fontFamily: {
      spring: 'spring',
      worksans: 'worksans'
    },
    backgroundImage: {
      'my_bg_image' : "url('../../../bg.jpg')",
    },
    backgroundSize: {
      'cover': 'cover',
    },
    backgroundRepeat: {
      'no-repeat': 'no-repeat',
    },
    backgroundPosition: {
      'center': 'center',
    },
  },
  plugins: [],
}
