/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Kita definisikan palet warna global di sini
      colors: {
        // Warna Utama (Dark Green/Forest untuk kesan Agriculture & Trust)
        brand: {
          light: "#ECF2F0",
          DEFAULT: "#064E3B",
          dark: "#022C22",
        },
        // Warna Sekunder (Navy untuk kesan Professional/International)
        corporate: {
          light: "#334155",
          DEFAULT: "#1E293B",
          dark: "#0F172A",
        },
        // Warna Pendukung (Earth tones/Beige)
        accent: {
          cream: "#F5E6D3",
          gold: "#D97706",
          earth: "#78350F",
        },
        // Warna Fungsional
        whatsapp: "#25D366",
        surface: "#F8FAF8", // Background yang nggak murni putih biar lebih premium
      },
    },
  },
  plugins: [],
}
