/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        hotpink: "#FFAEBC",
        tiffanyblue: "#A0E7E5",
        mint: "#B4F8C8",
        Yellowlight: "#FBE7C6",
      },
    },
  },
  plugins: [],
};
