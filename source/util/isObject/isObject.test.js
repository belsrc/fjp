import 'babel-core/register';
import test from 'ava';
import isObject from './index';

class TestClass {}

test('returns true for object', t => {
  const val = { foo: 'bar' };
  const actual = isObject(val);

  t.true(actual);
});

test('returns true for class', t => {
  const val = new TestClass();
  const actual = isObject(val);

  t.true(actual);
});

test('returns false for string', t => {
  const val = 'foobar';
  const actual = isObject(val);

  t.false(actual);
});

test('returns false for string object', t => {
  const val = String('foobar');
  const actual = isObject(val);

  t.false(actual);
});

test('returns false for number', t => {
  const val = 42;
  const actual = isObject(val);

  t.false(actual);
});

test('returns false for number object', t => {
  const val = Number(42);
  const actual = isObject(val);

  t.false(actual);
});

test('returns false for boolean', t => {
  const val = true;
  const actual = isObject(val);

  t.false(actual);
});

test('returns false for null', t => {
  const val = null;
  const actual = isObject(val);

  t.false(actual);
});

test('returns false for undefined', t => {
  const val = undefined;
  const actual = isObject(val);

  t.false(actual);
});

test('returns false for function', t => {
  const val = () => {};
  const actual = isObject(val);

  t.false(actual);
});

test('returns false for array', t => {
  const val = [1, 2, 3];
  const actual = isObject(val);

  t.false(actual);
});
