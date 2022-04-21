/* eslint-disable import/order */
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package');

const config = {
  input: 'source/index.js',
  output: {
    format: 'umd',
    exports: 'named',
    name: pkg.name,
  },
  plugins: [ nodeResolve(), babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }) ],
};

if(process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line fp-jxl/no-unused-expression
  config.plugins.push(terser());
}

module.exports = config;
