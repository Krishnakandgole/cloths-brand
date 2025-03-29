/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            animation: {
              border: "borderPulse 2s infinite",
            },
            keyframes: {
              borderPulse: {
                "0%": { borderColor: "#ff007f" },
                "50%": { borderColor: "#00ffcc" },
                "100%": { borderColor: "#ff007f" },
              },
            },
          },
  },
  plugins: [],
}