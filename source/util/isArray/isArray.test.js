import '@babel/register';
import isArray from './index';

class TestClass {}

describe('isArray', () => {
  test('returns false for object', () => {
    const val = { foo: 'bar' };

    const actual = isArray(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for class object', () => {
    const val = new TestClass();

    const actual = isArray(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for string', () => {
    const val = 'foobar';

    const actual = isArray(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for string object', () => {
    const val = String('foobar');

    const actual = isArray(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for number', () => {
    const val = 42;

    const actual = isArray(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for number object', () => {
    const val = Number(42);

    const actual = isArray(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for boolean', () => {
    const val = true;

    const actual = isArray(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for null', () => {
    const val = null;

    const actual = isArray(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for undefined', () => {
    const val = undefined;

    const actual = isArray(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns false for function', () => {
    const val = () => {};

    const actual = isArray(val);

    expect(actual).not.toBeTruthy();
  });

  test('returns true for array', () => {
    const val = [1, 2, 3];

    const actual = isArray(val);

    expect(actual).toBeTruthy();
  });
});
