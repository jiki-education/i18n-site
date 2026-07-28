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
  // `host: true` binds all interfaces rather than naming the hostname: Astro's
  // CLI feeds server.host straight into new URL(), which throws on a bare
  // hostname. allowedHosts below is what actually lets local.jiki.io through.
  server: {
    host: true,
    port: 3068
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["local.jiki.io"]
    }
  }
});
