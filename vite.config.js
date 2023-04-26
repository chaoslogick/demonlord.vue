import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
// reconfigure to compile scss, use .env

export default defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

  }
)
