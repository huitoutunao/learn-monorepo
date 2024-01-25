import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: [/lodash.*/],
    },
    lib: {
      entry: './src/index.ts',
      name: 'learnMonorepoShared',
      fileName: 'learn-monorepo-shared',
    },
    minify: false,
  },
})
