import 'babel-core/register';
import test from 'ava';
import isArray from './index';

class TestClass {}

test('returns false for object', t => {
  const val = { foo: 'bar' };
  const actual = isArray(val);

  t.false(actual);
});

test('returns false for class object', t => {
  const val = new TestClass();
  const actual = isArray(val);

  t.false(actual);
});

test('returns false for string', t => {
  const val = 'foobar';
  const actual = isArray(val);

  t.false(actual);
});

test('returns false for string object', t => {
  const val = String('foobar');
  const actual = isArray(val);

  t.false(actual);
});

test('returns false for number', t => {
  const val = 42;
  const actual = isArray(val);

  t.false(actual);
});

test('returns false for number object', t => {
  const val = Number(42);
  const actual = isArray(val);

  t.false(actual);
});

test('returns false for boolean', t => {
  const val = true;
  const actual = isArray(val);

  t.false(actual);
});

test('returns false for null', t => {
  const val = null;
  const actual = isArray(val);

  t.false(actual);
});

test('returns false for undefined', t => {
  const val = undefined;
  const actual = isArray(val);

  t.false(actual);
});

test('returns false for function', t => {
  const val = () => {};
  const actual = isArray(val);

  t.false(actual);
});

test('returns true for array', t => {
  const val = [1, 2, 3];
  const actual = isArray(val);

  t.true(actual);
});
