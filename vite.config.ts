import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: '',
  resolve: {
    alias: {
      '@/types': resolve(__dirname, 'src/types'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/constants': resolve(__dirname, 'src/constants'),
      '@/utils': resolve(__dirname, 'src/utils'),
      '@/hooks': resolve(__dirname, 'src/hooks'),
    },
  },
  server: { port: 9291, open: true },
})