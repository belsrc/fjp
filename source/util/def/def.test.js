import 'babel-core/register';
import test from 'ava';
import def from './index';

class TestClass {}

test('returns true for object', t => {
  const val = { foo: 'bar' };
  const actual = def(val);

  t.true(actual);
});

test('returns true for class', t => {
  const val = new TestClass();
  const actual = def(val);

  t.true(actual);
});

test('returns true for string', t => {
  const val = 'foobar';
  const actual = def(val);

  t.true(actual);
});

test('returns true for number', t => {
  const val = 42;
  const actual = def(val);

  t.true(actual);
});

test('returns true for number object', t => {
  const val = Number(42);
  const actual = def(val);

  t.true(actual);
});

test('returns true for boolean', t => {
  const val = true;
  const actual = def(val);

  t.true(actual);
});

test('returns true for null', t => {
  const val = null;
  const actual = def(val);

  t.true(actual);
});

test('returns true for function', t => {
  const val = () => {};
  const actual = def(val);

  t.true(actual);
});

test('returns true for array', t => {
  const val = [ 1, 2, 3 ];
  const actual = def(val);

  t.true(actual);
});

test('returns false for undefined', t => {
  const val = undefined;
  const actual = def(val);

  t.false(actual);
});
