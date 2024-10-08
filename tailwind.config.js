module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#03459B",
        secondary: "#604ce1",
        background: "#f5f5f5",
        foreground: "#0b0b0b",
        text: "#101010",
        border: "#e1e1e1a5",
        textSecondary: "#1c1c1c",
      },
    },
  },
  plugins: [],
};
