/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": ['"Dancing Script"', "cursive"],
        poppins: ['"Poppins"', "sans-serif"],
        quicksand: ['"Quicksand"', "sans-serif"],
        nunito: ['"Nunito"', "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
