/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '480px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        'large-screen': '1440px',
      },
      colors:{
        primary:{
          100:"#F27B97",
          200:"#FFE1E8"
        },
        black:{
          100:"#363636",
          200:"#444444",
          300:"#000000",
          400:"#555555",
          500:"#111111"
        },
        grey:{
          100:"#999999",
          200:"#EEEEEE"
        }
      },
    },
  },
  plugins: [],
}

