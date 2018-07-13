import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import babili from 'rollup-plugin-babili';
const pkg = require('./package.json');

const config = {
  input: 'source/index.js',
  output: {
    format: 'umd',
    exports: 'named',
    name: pkg.name,
  },
  plugins: [ resolve(), babel({ exclude: 'node_modules/**' }) ],
};

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(babili());
}

module.exports = config;
