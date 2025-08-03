import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./", // correct, not "."
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
     sourcemap: "inline", // embeds source map into JS// enable source maps to trace minified errors
    minify: false,            // temporarily disable minification to surface the real symbol and stack
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
    chunkSizeWarningLimit: 1000,
  },
});
