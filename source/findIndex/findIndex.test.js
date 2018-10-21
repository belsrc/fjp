import 'babel-core/register';
import test from 'ava';
import findIndex from './index';

test('returns number value', t => {
  const actual = findIndex(x => x.score === 5, [
    { score: 1 },
    { score: 2 },
    { score: 5 },
    { score: 6 },
    { score: 7 },
  ]);

  t.true(typeof actual === 'number' && !isNaN(actual) && isFinite(actual));
});

test('returns correct index', t => {
  const actual = findIndex(x => x.score === 5, [
    { score: 1 },
    { score: 2 },
    { score: 5 },
    { score: 6 },
    { score: 7 },
  ]);

  t.is(actual, 2);
});

test('returns -1 for find not in array', t => {
  const actual = findIndex(x => x.score === 10, [
    { score: 1 },
    { score: 2 },
    { score: 5 },
    { score: 6 },
    { score: 7 },
  ]);

  t.is(actual, -1);
});

test('returns first index when multiple matches', t => {
  const actual = findIndex(x => x.score === 5, [
    { score: 1 },
    { score: 2 },
    { score: 5 },
    { score: 6 },
    { score: 5 },
  ]);

  t.is(actual, 2);
});
