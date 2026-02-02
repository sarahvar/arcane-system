import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // ← assure que la racine est bien le dossier actuel
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html", // ← point d’entrée explicite
    },
  },
});