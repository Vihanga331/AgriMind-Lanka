export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        soil: "#8A5A2B",
        paddy: "#95D85B",
        tea: "#0F6B45",
        lagoon: "#13B8A6",
        night: "#07130F",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(19, 184, 166, 0.22)",
      },
    },
  },
  plugins: [],
};
