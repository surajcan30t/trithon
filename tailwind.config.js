/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "marquee": "marquee 2s linear infinite",
        "txt": "txt 2s ease infinite",
      },
      keyframes: {
        marquee: {
          "0%": { left: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        txt: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
}

