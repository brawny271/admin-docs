/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "text-white-glow": "0 0 10px rgba(255, 255, 255, 0.7)",
      },
      // keyframes: {
      //   sparkle: {
      //     "0%, 100%": { opacity: 1 },
      //     "50%": { opacity: 0.5 },
      //   },
      // },
      // animation: {
      //   sparkle: "sparkle 1s infinite ease-in-out",
      // },
    },
  },
  plugins: [],
};
