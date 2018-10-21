import 'babel-core/register';
import test from 'ava';
import tail from './index';

test('returns empty array for empty array', t => {
  const actual = tail([]);

  t.true(Array.isArray(actual));
  t.true(actual.length === 0);
});

test('returns remaing elements', t => {
  const actual = tail([
    1,
    2,
    3,
    4,
    5,
  ]);

  t.true(Array.isArray(actual));
  t.true(actual.length === 4);
  t.deepEqual(actual, [
    2,
    3,
    4,
    5,
  ]);
});
