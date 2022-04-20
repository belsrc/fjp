import 'babel-core/register';
import test from 'ava';
import trampoline from './index';

const recSumBelow = (number, sum = 0) =>
  number === 0 ? sum : sumBelow(number - 1, sum + number);

const tramSumBelow = (number, sum = 0) =>
  number === 0  ? sum : () => sumBelow(number - 1, sum + number);

const value = 100000;


test('normal recursion should fail', t => {
  t.throws(() => {
		recSumBelow(value);
	}, { instanceOf: TypeError });
});

test('trampoline should not fail', t => {
  t.notThrows(() => {
		trampoline(tramSumBelow)(value);
	}, { instanceOf: TypeError });
});

test('trampoline should return expected', t => {
  const expected = 5000050000;

  const actual = recSumBelow(value);

  t.is(actual, expected);
});
