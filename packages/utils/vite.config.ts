import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  // plugins: [
  //   dts({
  //     //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
  //     tsConfigFilePath: '../../tsconfig.json',
  //   }),
  //   dts({
  //     outputDir: 'lib',
  //     tsConfigFilePath: '../../tsconfig.json',
  //   }),
  // ],
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
