import 'babel-core/register';
import test from 'ava';
import compact from './index';

test('returns empty array for null arg', t => {
  const actual = compact();

  t.true(Array.isArray(actual) && actual.length === 0);
});

test('returns array', t => {
  const arr = [
    0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34,
  ];
  const actual = compact(arr);

  t.true(Array.isArray(actual));
});

test('returns correct value', t => {
  const arr = [
    0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34,
  ];
  const expected = [
    1, 2, 3, 'a', 's', 34,
  ];
  const actual = compact(arr);

  t.deepEqual(actual, expected);
});
