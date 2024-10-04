import { minify } from 'rollup-plugin-esbuild-minify'
import sass from 'rollup-plugin-sass';

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.min.js',
    format: 'iife',
    name: 'TimeKeeper'
  },
  plugins: [ minify(),
        sass({
            include:  ['./src/css/style.scss'],
            output: 'dist/style.css'
        }) ]
};
