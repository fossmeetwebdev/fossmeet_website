module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_900: "#2b303f",
        black_900: "#000000",
        blue_A400: "#167dff",
        bluegray_400: "#7f8395",
        bluegray_101: "#d6d8e5",
        bluegray_100: "#d9d9d9",
        black_900_19: "#00000019",
        white_A700: "#ffffff",
        gray_50: "#f8f9fa",
      },
      fontFamily: {
        lato: "Lato",
        jetbrainsmono: "JetBrains Mono",
        opensans: "Open Sans",
      },
      borderRadius: { radius10: "10px", radius30: "30px", radius50: "50%" },
      boxShadow: { bs: "4px 4px  10px 2px #00000019" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
