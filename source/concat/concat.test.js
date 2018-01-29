import 'babel-core/register';
import test from 'ava';
import concat from './index';

test('returns empty array for two nulls', t => {
  const actual = concat(null, null);

  t.true(Array.isArray(actual));
  t.true(actual.length === 0);
});

test('returns empty array for two empty arrays', t => {
  const actual = concat([], []);

  t.true(Array.isArray(actual));
  t.true(actual.length === 0);
});

test('returns concatenated array', t => {
  const actual = concat([ 1, 2, 3 ], [ 4, 5, 6 ]);

  t.true(Array.isArray(actual));
  t.deepEqual(actual, [ 1, 2, 3, 4, 5, 6 ]);
});

test('returns concatenated string', t => {
  const actual = concat('unit', 'test');

  t.true(typeof actual === 'string');
  t.true(actual === 'unittest');
});
