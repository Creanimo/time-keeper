import { minify } from 'rollup-plugin-esbuild-minify'

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.min.js',
    format: 'iife',
    name: 'TimeKeeper'
  },
  plugins: [ minify() ]
};
