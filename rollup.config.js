import { minify } from 'rollup-plugin-esbuild-minify';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import sass from 'rollup-plugin-sass';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import dotenv from "rollup-plugin-dotenv";

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.min.js',
    format: 'iife',
    name: 'TimeKeeper',
    globals: {
            path: "path",
            url: "url"
        }
  },
  plugins: [ minify(),
        sass(),
        nodePolyfills(),
        resolve({
            modulePaths: ['node_modules']
        }),
        commonjs(),
        dotenv()
    ]
};
