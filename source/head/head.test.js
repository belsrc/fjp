import 'babel-core/register';
import test from 'ava';
import head from './index';

test('returns undefined for empty array', t => {
  const actual = head([]);

  t.is(actual, undefined);
});

test('returns first element', t => {
  const actual = head([
    1,
    2,
    3,
    4,
    5,
  ]);

  t.is(actual, 1);
});
