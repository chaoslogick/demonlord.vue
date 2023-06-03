import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
// reconfigure to compile scss, use .env

export default defineConfig({
  server: {
    host: "localhost",
    port: 9999,
  },
  plugins: [vue()],
  resolve: {
    alias:[
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      { find: '@stores', replacement: fileURLToPath(new URL('./src/store', import.meta.url)) },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/app.scss";
        `
      }
    }
  }
},(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
}));
