require('babel-core/register');
const glob = require('glob');
const Benchmark = require('benchmark');
const Table = require('cli-table');

const BENCHES = 'source/**/*.bench.js';
const THRESHOLD = 0.5;

const blue = str => `\x1b[94m${ str }\x1b[0m`;

const green = str => `\x1b[92m${ str }\x1b[0m`;

const getTable = name =>
  new Table({
    head: [ name, 'Hertz', 'Count' ],
    colWidths: [ 40, 20, 20 ],
  });

const prettyHz = hz =>
  Benchmark.formatNumber(hz.toFixed(hz < 100 ? 2 : 0));

const prettyNum = num => `${ num.toLocaleString('en') }`;

const benchNames = s => Object.keys(s).filter(x => !isNaN(x)).sort();

const difference = (a, b) => (a - b) / a;

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
          table.push([ vo.target.name, prettyHz(vo.target.hz), prettyNum(vo.target.count) ]);
        },
      });
    });

    suite
      .on('complete', () => {
        const benches = benchNames(suite).map(x => suite[x]);
        const fastest = benches.reduce((acc, curr) =>
          curr.count > (acc.count || 0) ? curr : acc, {});
        const fjp = benches.filter(x => x.name.startsWith('fjp.'))[0];
        const diff = difference(fastest.count, fjp.count);

        if(diff > THRESHOLD) {
          const msg = `Implemented is not within ${ THRESHOLD * 100 }% of fastest: [${ fastest.count }, ${ fjp.count }]`;

          console.log(msg);
          // throw new RangeError(msg);
        }

        console.log(`  ${ blue('Fastest: ') }${ green(fastest.name) }${ blue(' @ ') }${ green(prettyNum(fastest.count)) }`);
        console.log(`  ${ blue('FJP Diff Compared to Fastest: ') }${ green((diff * 100).toFixed(4)) }%`);
        console.log();
      })
      .run({ async: true });
  });
}

glob(BENCHES, (error, files) => runBenchmarks(files));
