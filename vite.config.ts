import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://alexandrkovalev1.github.io/at-work/',
  plugins: [react()],
})

