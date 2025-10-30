import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
      tailwindcss(),
  ],
   build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // '@' points to 'src' folder
    },
  },
})


// import react from '@vitejs/plugin-react';

// export default {
//   plugins: [react({
//     jsxRuntime: 'automatic',
//   })],
// };
