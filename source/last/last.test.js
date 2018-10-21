import 'babel-core/register';
import test from 'ava';
import last from './index';

test('returns empty array for empty array', t => {
  const actual = last([]);

  t.true(Array.isArray(actual));
  t.true(actual.length === 0);
});

test('returns single element for null n arg', t => {
  const actual = last([
    1,
    2,
    3,
    4,
    5,
  ]);

  t.true(Array.isArray(actual));
  t.true(actual.length === 1);
  t.deepEqual(actual, [5]);
});

test('returns n elements for n arg', t => {
  const actual = last([
    1,
    2,
    3,
    4,
    5,
  ], 3);

  t.true(Array.isArray(actual));
  t.true(actual.length === 3);
  t.deepEqual(actual, [ 3, 4, 5 ]);
});
