import 'babel-core/register';
import test from 'ava';
import isFunction from './index';

class TestClass {}

test('returns false for object', t => {
  const val = { foo: 'bar' };
  const actual = isFunction(val);

  t.false(actual);
});

test('returns false for class object', t => {
  const val = new TestClass();
  const actual = isFunction(val);

  t.false(actual);
});

test('returns false for string', t => {
  const val = 'foobar';
  const actual = isFunction(val);

  t.false(actual);
});

test('returns false for string object', t => {
  const val = String('foobar');
  const actual = isFunction(val);

  t.false(actual);
});

test('returns false for number', t => {
  const val = 42;
  const actual = isFunction(val);

  t.false(actual);
});

test('returns false for number object', t => {
  const val = Number(42);
  const actual = isFunction(val);

  t.false(actual);
});

test('returns false for boolean', t => {
  const val = true;
  const actual = isFunction(val);

  t.false(actual);
});

test('returns false for null', t => {
  const val = null;
  const actual = isFunction(val);

  t.false(actual);
});

test('returns false for undefined', t => {
  const val = undefined;
  const actual = isFunction(val);

  t.false(actual);
});

test('returns true for function', t => {
  const val = () => {};
  const actual = isFunction(val);

  t.true(actual);
});

test('returns false for array', t => {
  const val = [1, 2, 3];
  const actual = isFunction(val);

  t.false(actual);
});

/*
┌────────────────────────────────────────┬────────────────────┬────────────────────┐
│ isFunction                             │ Hertz              │ Margin of Error    │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ typeof                                 │ 861,797,073        │ 0.19%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ constructor                            │ 859,013,504        │ 0.20%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ constructor 2                          │ 861,257,297        │ 0.17%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ instanceof                             │ 194,121,617        │ 0.27%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ prototype.toString                     │ 160,487,648        │ 0.30%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ isFunction                             │ 859,414,625        │ 0.22%              │
└────────────────────────────────────────┴────────────────────┴────────────────────┘
 */
