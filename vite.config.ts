import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// COMPLETE CACHE CLEAR - Force new bundle version
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: false,
    force: true
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ['react', 'react-dom']
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    force: true,
    entries: [],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]-[hash]-${Date.now()}.js`,
        chunkFileNames: `[name]-[hash]-${Date.now()}.js`,
        assetFileNames: `[name]-[hash]-${Date.now()}.[ext]`
      }
    }
  },
  define: {
    __CACHE_TIMESTAMP__: Date.now()
  }
}));