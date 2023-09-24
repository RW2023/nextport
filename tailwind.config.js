/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'overlay': 'rgba(184, 193, 236, 0.5)',
        'background': '#232946',
        'button': '#ff8906',
        'headline': '#fffffe',
        'paragraph': '#b8c1ec',
        'buttonText': '#232946',
        'stroke': '#121629',
        'main': '#b8c1ec',
        'highlight': '#eebbc3',
        'secondary': '#fffffe',
        'tertiary': '#eebbc3',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      daisyui: {
        themes: true
      },
    },
  },
  plugins: [require("daisyui")],
};
