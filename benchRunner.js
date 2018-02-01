require('babel-core/register');
const glob = require('glob');
const Benchmark = require('benchmark');
const Table = require('cli-table');

const benchGlob = 'source/**/*.bench.js';

function blue(str) {
  return `\x1b[94m${ str }\x1b[0m`;
}

function green(str) {
  return `\x1b[92m${ str }\x1b[0m`;
}

function getTable(name) {
  return new Table({
    head: [ name, 'Hertz', 'Margin of Error' ],
    colWidths: [ 40, 20, 20 ],
  });
}

function prettyHz(hz) {
  return Benchmark.formatNumber(hz.toFixed(hz < 100 ? 2 : 0));
}

function prettyMoe(moe) {
  return `${ moe.toFixed(2) }%`;
}

function runBenchmarks(files) {
  files.forEach(file => {
    const test = require(`${ __dirname }/${ file }`);
    const table = getTable(test.name);
    const suite = Benchmark.Suite(test.name, {
      onComplete() {
        console.log(table.toString());
      },
    });

    Object.keys(test.tests).forEach(k => {
      suite.add(k, test.tests[k], {
        onComplete(vo) {
          table.push([ vo.target.name, prettyHz(vo.target.hz), prettyMoe(vo.target.stats.rme) ]);
        },
      });
    });

    suite
      .on('complete', () => {
        console.log(`  ${ blue('Fastest is ') }${ green(suite.filter('fastest').map('name')) }`);
        console.log();
      })
      .run({ async: true });
  });
}

glob(benchGlob, (error, files) => {
  runBenchmarks(files);
});
