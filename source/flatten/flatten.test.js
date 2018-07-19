import 'babel-core/register';
import test from 'ava';
import flatten from './index';

test('returns empty array for null arg', t => {
  const actual = flatten(null);

  t.true(Array.isArray(actual) && actual.length === 0);
});

test('returns array', t => {
  const arr = [[ 1, 2 ], [ 3, 4 ]];
  const actual = flatten(arr);

  t.true(Array.isArray(actual));
});

test('returns correct value', t => {
  const arr = [[ 1, 2 ], [ 3, 4 ]];
  const expected = [1, 2, 3, 4];
  const actual = flatten(arr);

  t.deepEqual(actual, expected);
});
