/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#797DFC",
        "primary-light": "#797DFC1A",
        secondary: "#12132D",
      },
      fontFamily: {
        interFont: ["Inter", "sans-serif"],
        tekoFont: ["Teko", "sans-serif"],
      },
      backgroundImage: () => ({
        "login-bg": "url('./src/assets/login_background.jpg')",
      }),
    },
  },
  plugins: [daisyui],
};
