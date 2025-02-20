/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#0A0A0A", // Adjusted to match the dark background in the image
        navText: "#EAEAEA",
        buttonBg: "#1E1E1E",
        buttonBorder: "#3A3A3A",
      },
    },
  },
  plugins: [],
};
