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
      '@/db': resolve(__dirname, 'src/db'),
    },
  },
  server: { port: 9291, open: true },
})