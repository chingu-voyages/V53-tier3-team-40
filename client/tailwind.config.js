import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        footerTextColor: "#9bc25b",
        navLinkColor: "#4fd1c5",
        footerBoxColor: "#C6DAF1",
        footerProfileNameColor: "#00000",
        footerBackgroundColor: "#f9f9f9",
        footerLinkedinHoverColor: "#0072B1"
      }
    }
  },
  darkMode: "class",
  plugins: [daisyui]
};
