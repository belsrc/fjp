import '@babel/register';
import isNumber from './index';

class TestClass {}

describe('isNumber', () => {
  test('returns false for object', () => {
    const val = { foo: 'bar' };

    const actual = isNumber(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for class', () => {
    const val = new TestClass();

    const actual = isNumber(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for string', () => {
    const val = 'foobar';

    const actual = isNumber(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for string object', () => {
    const val = String('foobar');

    const actual = isNumber(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for boolean', () => {
    const val = true;

    const actual = isNumber(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for null', () => {
    const val = null;

    const actual = isNumber(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for undefined', () => {
    const val = undefined;

    const actual = isNumber(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for function', () => {
    const val = () => {};

    const actual = isNumber(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for array', () => {
    const val = [1, 2, 3];

    const actual = isNumber(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for NaN', () => {
    const val = NaN;

    const actual = isNumber(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for INFINITY', () => {
    const val = Number.POSITIVE_INFINITY;

    const actual = isNumber(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns true for number', () => {
    const val = 42;

    const actual = isNumber(val);

    expect(actual).toBeTruthy();
  });

  test('returns true for number object', () => {
    const val = Number(42);

    const actual = isNumber(val);

    expect(actual).toBeTruthy();
  });

  test('returns true for scientific number', () => {
    const val = 8e5;

    const actual = isNumber(val);

    expect(actual).toBeTruthy();
  });

  test('returns true for hexidecimal number', () => {
    const val = 0x2f;

    const actual = isNumber(val);

    expect(actual).toBeTruthy();
  });
});
