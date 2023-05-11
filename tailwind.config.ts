import { type Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customIron: "#cdcacd",
        customTextWhite: "#fcfefd",
        customBunker: "#0d1515",
        customPelorous: "#36bdba",
        customTrinidad: "#f65707",
        customIronsideGray: "#64625e",
        customTuatara: "#242b30",
        customSpectra: "#36bdbb",
        customDeluge: "#816ab1",
        customOxfordBlue: "#34404d",
        customMenuBackground: "#1a2020",
        customWarning: "#e2eb46",
        customInPrograssBG: "#2a2317",
        customReviewBG: "#262f16",
        customDoneBG: "#122828",
        customInPrograssText: "#be9360",
        customReviewText: "#be9360",
        customDoneText: "#32827e",
      },
    },
  },
  plugins: [],
} satisfies Config
