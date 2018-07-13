import 'babel-core/register';
import test from 'ava';
import difference from './index';

test('returns empty array for null args', t => {
  const actual = difference(null, null);

  t.true(Array.isArray(actual) && actual.length === 0);
});

test('returns second array if first is empty', t => {
  const expected = [1, 2, 4];
  const actual = difference([], [1, 2, 4]);

  t.deepEqual(actual, expected);
});

test('returns second array if first is null', t => {
  const expected = [1, 2, 4];
  const actual = difference(null, [1, 2, 4]);

  t.deepEqual(actual, expected);
});

test('returns first array if second is empty', t => {
  const expected = [1, 2, 3];
  const actual = difference([1, 2, 3], []);

  t.deepEqual(actual, expected);
});

test('returns first array if second is null', t => {
  const expected = [1, 2, 3];
  const actual = difference([1, 2, 3], null);

  t.deepEqual(actual, expected);
});

test('returns correct result', t => {
  const expected = [3];
  const actual = difference([1, 2, 3], [1, 2, 4]);

  t.deepEqual(actual, expected);
});
