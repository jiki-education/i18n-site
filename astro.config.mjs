// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://i18n.jiki.io",
  trailingSlash: "ignore",
  build: {
    format: "directory"
  },
  // Dev runs on http://local.jiki.io:3068 (local.jiki.io resolves to 127.0.0.1
  // via /etc/hosts), matching how the rest of the Jiki apps are served locally.
  server: {
    host: "local.jiki.io",
    port: 3068
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["local.jiki.io"]
    }
  }
});
