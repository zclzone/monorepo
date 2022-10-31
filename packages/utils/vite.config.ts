import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    minify: true,
    sourcemap: false,
    rollupOptions: {
      external: ['crypto-js'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          //打包成.js，而不是.es.js
          entryFileNames: '[name].js',
          //让打包目录和源代码目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'dist/es',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'dist/cjs',
        },
      ],
    },
    lib: {
      entry: './src/index.ts',
      name: '$z',
      // fileName: '[format]/[name]',
      // formats: ['es', 'cjs'],
    },
  },
})
