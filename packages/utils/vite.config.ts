import {defineConfig} from 'vite';
// import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    // dts({
    //   tsConfigFilePath: '../../tsconfig.json',
    // })
  ],
  build: {
    target: 'modules',
    outDir: 'dist',
    minify: true,
    rollupOptions: {
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'dist/es',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'dist/lib',
        },
      ]
    },
    lib: {
      entry: 'index.ts',
      formats: ['es', 'cjs']
    }
  }
})