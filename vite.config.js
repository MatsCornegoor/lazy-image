import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    plugins: [],
    build: {
      manifest: true,
      minify: true,
      reportCompressedSize: true,
      lib: {
        entry: path.resolve(__dirname, "lazyimages.js"),
        fileName: "main",
        formats: ["es", "cjs"],
      },
    },
  });