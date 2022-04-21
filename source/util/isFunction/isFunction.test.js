import '@babel/register';
import isFunction from './index';

class TestClass {}

describe('isFunction', () => {
  test('returns false for object', () => {
    const val = { foo: 'bar' };

    const actual = isFunction(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for class object', () => {
    const val = new TestClass();

    const actual = isFunction(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for string', () => {
    const val = 'foobar';

    const actual = isFunction(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for string object', () => {
    const val = String('foobar');

    const actual = isFunction(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for number', () => {
    const val = 42;

    const actual = isFunction(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for number object', () => {
    const val = Number(42);

    const actual = isFunction(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for boolean', () => {
    const val = true;

    const actual = isFunction(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for null', () => {
    const val = null;

    const actual = isFunction(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for undefined', () => {
    const val = undefined;

    const actual = isFunction(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for array', () => {
    const val = [1, 2, 3];

    const actual = isFunction(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns true for function', () => {
    const val = () => {};

    const actual = isFunction(val);

    expect(actual).toBeTruthy();
  });
});
