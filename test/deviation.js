import 'babel-core/register';
import test from 'ava';
import deviation from './../src/deviation';

test('returns number for sample deviation', t => {
  const arr = [
    10,
    2,
    38,
    23,
    38,
    23,
    21,
  ];
  const expected = 'number';
  const actual = deviation(false, arr);

  t.is(typeof actual, expected);
});

test('returns number for population deviation', t => {
  const arr = [
    10,
    2,
    38,
    23,
    38,
    23,
    21,
  ];
  const expected = 'number';
  const actual = deviation(true, arr);

  t.is(typeof actual, expected);
});

test('returns correct value for sample deviation', t => {
  const arr = [
    10,
    2,
    38,
    23,
    38,
    23,
    21,
  ];
  const expected = 13.284434142114991;
  const actual = deviation(false, arr);

  t.is(actual, expected);
});

test('returns correct value for population deviation', t => {
  const arr = [
    10,
    2,
    38,
    23,
    38,
    23,
    21,
  ];
  const expected = 12.29899614287479;
  const actual = deviation(true, arr);

  t.is(actual, expected);
});
