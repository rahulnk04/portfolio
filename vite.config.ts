import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
   build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.match(/react|react-dom/)) return "react-vendor";
            if (id.match(/@mui/)) return "mui-vendor";
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // optional: raise warning threshold to 1MB if you’ve audited size
  },
});




