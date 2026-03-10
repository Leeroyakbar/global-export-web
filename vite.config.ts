import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite" // Sekarang ini seharusnya sudah ditemukan

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tambahkan sebagai plugin
  ],
})
