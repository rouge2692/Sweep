/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        daycareone: "url(/public/iStock-684059604.jpg)",
        herobg: "url(/src/assets/MobileHeroBanner.png)",
        heromdbg: "url(src/assets/mdSecHero.png)",
      },
      fontFamily: {
        logo: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
