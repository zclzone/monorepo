import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      outputDir: 'dist',
      tsConfigFilePath: '../../tsconfig.json',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  build: {
    target: ['es2015'],
    minify: true,
    sourcemap: false,
    rollupOptions: {
      external: ['crypto-js'],
      input: [path.resolve(__dirname, './src/index.ts')],
    },
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: '$z',
      fileName: 'index',
    },
  },
})
