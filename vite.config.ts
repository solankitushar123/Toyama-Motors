import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the built site can be opened from any folder / static host
// without server-side rewrite rules (paired with HashRouter for routing).
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
