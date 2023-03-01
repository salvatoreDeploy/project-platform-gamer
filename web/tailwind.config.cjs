/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        fundo: "url('/Fundo.png')",
        "text-gradient":
          "linear-gradient(89.86deg, #9572FC 14%, #43E7AD 68%, #E1D55D 100%)",
        "border-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);",
      },

      fontFamily: {
        sans: "Inter, sans-serif",
      },

      colors: {
        gray: {
          900: "#121214",
        },
      },
    },
  },
  plugins: [],
};
