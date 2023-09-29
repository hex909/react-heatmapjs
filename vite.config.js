import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "react-grid-heatmapjs",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
