import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import checker from "vite-plugin-checker";
import Inspect from "vite-plugin-inspect";


export default defineConfig(async () => {
  const tsconfigPaths = await import("vite-tsconfig-paths").then(
    (module) => module.default
  );



  return {
    base: "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        components: path.resolve(__dirname, "src/components"),
        assets: path.resolve(__dirname, "src/assets"),
      },
    },
    plugins: [
      react(),
      tsconfigPaths(),
      Inspect(),
      checker({ typescript: true }),
      // mkcert(),
    ],
    build: {
      outDir: "./build",
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: "js/[name].[hash].js",
          chunkFileNames: "js/[name].[hash].js",
          assetFileNames: (assetInfo) => {
            if (/\.css$/i.test(assetInfo.name)) {
              return "css/[name].[hash][extname]";
            } else if (/\.woff2?$|\.ttf$|\.otf$/i.test(assetInfo.name)) {
              return "font/[name].[hash][extname]";
            } else {
              return "assets/[name].[hash][extname]";
            }
          },
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
      cssCodeSplit: true,
      chunkSizeWarningLimit: 500,
    },
    server: {
      root: "public",
      port: 3000,
      open: true,
      
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    preview: {
      port: 8080,
      open: true,
      proxy: {
        "^/[^.]*$": {
          target: "/",
          rewrite: (path) => "/index.html",
        },
      },
    },
  };
});
