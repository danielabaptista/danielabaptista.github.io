import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// danielabaptista.github.io is a user site, so it is served from the root.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
