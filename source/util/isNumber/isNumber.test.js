import 'babel-core/register';
import test from 'ava';
import isNumber from './index';

class TestClass {}

test('returns false for object', t => {
  const val = { foo: 'bar' };
  const actual = isNumber(val);

  t.false(actual);
});

test('returns false for class', t => {
  const val = new TestClass();
  const actual = isNumber(val);

  t.false(actual);
});

test('returns false for string', t => {
  const val = 'foobar';
  const actual = isNumber(val);

  t.false(actual);
});

test('returns false for string object', t => {
  const val = String('foobar');
  const actual = isNumber(val);

  t.false(actual);
});

test('returns false for boolean', t => {
  const val = true;
  const actual = isNumber(val);

  t.false(actual);
});

test('returns false for null', t => {
  const val = null;
  const actual = isNumber(val);

  t.false(actual);
});

test('returns false for undefined', t => {
  const val = undefined;
  const actual = isNumber(val);

  t.false(actual);
});

test('returns false for function', t => {
  const val = () => {};
  const actual = isNumber(val);

  t.false(actual);
});

test('returns false for array', t => {
  const val = [ 1, 2, 3 ];
  const actual = isNumber(val);

  t.false(actual);
});

test('returns false for NaN', t => {
  const val = NaN;
  const actual = isNumber(val);

  t.false(actual);
});

test('returns false for INFINITY', t => {
  const val = Number.POSITIVE_INFINITY;
  const actual = isNumber(val);

  t.false(actual);
});

test('returns true for number', t => {
  const val = 42;
  const actual = isNumber(val);

  t.true(actual);
});

test('returns true for number object', t => {
  const val = Number(42);
  const actual = isNumber(val);

  t.true(actual);
});

test('returns true for scientific number', t => {
  const val = 8e5;
  const actual = isNumber(val);

  t.true(actual);
});

test('returns true for hexidecimal number', t => {
  const val = 0x2f;
  const actual = isNumber(val);

  t.true(actual);
});
