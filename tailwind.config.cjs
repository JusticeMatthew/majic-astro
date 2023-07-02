/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  theme: {
    extend: {
      colors: {
        seasalt: '#F8FAFC',
        text: '#0D111C',
        yinmin: '#1B5299',
        purp: '#735CDD',
        picton: '#00A7E1',
        darkBlue: '#0B112B',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        calistoga: ['Calistoga', 'cursive'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #735CDD, #00A7E1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
