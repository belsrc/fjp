import '@babel/register';
import trampoline from './index';

const recSumBelow = (number, sum = 0) =>
  number === 0 ? sum : recSumBelow(number - 1, sum + number);

const tramSumBelow = (number, sum = 0) =>
  number === 0  ? sum : () => tramSumBelow(number - 1, sum + number);

const value = 100000;


test('normal recursion should fail', () => {
  expect(() => {
    recSumBelow(value);
  }).toThrow();
});

test('trampoline should not fail', () => {
  expect(() => {
    trampoline(tramSumBelow)(value);
  }).not.toThrow();
});

test('trampoline should return expected', () => {
  const expected = 5000050000;

  const actual = trampoline(tramSumBelow)(value);

  expect(actual).toBe(expected);
});
