/** @type {import("tailwindcss").Config} */
export default {
  content: ["./page1.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      screens: {
        "1bp": { max: "1300px" },
        "2bp": { max: "1641px" },
        "3bp": { max: "1315px" },
        "4bp": { max: "1129px" },
        "5bp": { max: "731px" },
        "6bp": { max: "406px" },
      },
    },
  },
  plugins: [],
};