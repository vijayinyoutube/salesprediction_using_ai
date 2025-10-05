import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// When deploying to GitHub Pages under a repo (not a user/org root),
// Vite needs the `base` option set to the repository name so asset
// URLs are generated correctly (e.g. /repo-name/...).
export default defineConfig({
  base: '/salesprediction_using_ai/',
  plugins: [react(), tailwindcss()],
});
