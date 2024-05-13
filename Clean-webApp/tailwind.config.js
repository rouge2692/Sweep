/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        daycareone: "url(/public/iStock-684059604.jpg)",
        herobg: "url(/src/assets/MobileHeroBanner.png)",
        heromdbg: "url(src/assets/mdSecHero.png)",
        heroban: "url(src/assets/hero-banner.webp)",
        stepOne: "url(src/assets/step1_LandingHome.png)",
      },
      fontFamily: {
        logo: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
