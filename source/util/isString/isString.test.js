import '@babel/register';
import isString from './index';

class TestClass {}

describe('isNumber', () => {
  test('returns false for object', () => {
    const val = { foo: 'bar' };

    const actual = isString(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for class', () => {
    const val = new TestClass();

    const actual = isString(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for number', () => {
    const val = 42;

    const actual = isString(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for number object', () => {
    const val = Number(42);

    const actual = isString(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for boolean', () => {
    const val = true;

    const actual = isString(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for null', () => {
    const val = null;

    const actual = isString(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for undefined', () => {
    const val = undefined;

    const actual = isString(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for function', () => {
    const val = () => {};
    const actual = isString(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for array', () => {
    const val = [1, 2, 3];

    const actual = isString(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns true for string', () => {
    const val = 'foobar';

    const actual = isString(val);

    expect(actual).toBeTruthy();
  });

  test('returns true for string object', () => {
    const val = String('foobar');

    const actual = isString(val);

    expect(actual).toBeTruthy();
  });
});
