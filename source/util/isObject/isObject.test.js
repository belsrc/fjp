import '@babel/register';
import isObject from './index';

class TestClass {}

describe('isNumber', () => {
  test('returns false for string', () => {
    const val = 'foobar';

    const actual = isObject(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for string object', () => {
    const val = String('foobar');

    const actual = isObject(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for number', () => {
    const val = 42;

    const actual = isObject(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for number object', () => {
    const val = Number(42);

    const actual = isObject(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for boolean', () => {
    const val = true;

    const actual = isObject(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for null', () => {
    const val = null;

    const actual = isObject(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for undefined', () => {
    const val = undefined;
    const actual = isObject(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for function', () => {
    const val = () => {};

    const actual = isObject(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for array', () => {
    const val = [1, 2, 3];

    const actual = isObject(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns true for object', () => {
    const val = { foo: 'bar' };

    const actual = isObject(val);

    expect(actual).toBeTruthy();
  });

  test('returns true for class', () => {
    const val = new TestClass();

    const actual = isObject(val);

    expect(actual).toBeTruthy();
  });
});
