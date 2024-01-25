import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: [/@learn-monorepo.*/, 'vue'],
    },
    lib: {
      entry: './src/index.ts',
      name: 'learnMonorepoUi',
      fileName: 'learn-monorepo-ui',
    },
    minify: false,
  },
})
