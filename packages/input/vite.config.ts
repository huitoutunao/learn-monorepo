import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        /@learn-monorepo.*/,
        'vue'
      ],
    },
    lib: {
      entry: './src/index.ts',
      name: 'learnMonorepoInput',
      fileName: 'learn-monorepo-input'
    },
    minify: false,
  },
})
