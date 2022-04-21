import '@babel/register';
import difference from './index';

describe('difference', () => {
  test('returns empty array for null args', () => {
    const actual = difference(null, null);

    expect(Array.isArray(actual)).toBeTruthy();
    expect(actual).toHaveLength(0);
  });

  test('returns second array if first is empty', () => {
    const expected = [1, 2, 4];

    const actual = difference([], [1, 2, 4]);

    expect(actual).toEqual(expected);
  });

  test('returns second array if first is null', () => {
    const expected = [1, 2, 4];

    const actual = difference(null, [1, 2, 4]);

    expect(actual).toEqual(expected);
  });

  test('returns first array if second is empty', () => {
    const expected = [1, 2, 3];

    const actual = difference([1, 2, 3], []);

    expect(actual).toEqual(expected);
  });

  test('returns first array if second is null', () => {
    const expected = [1, 2, 3];

    const actual = difference([1, 2, 3], null);

    expect(actual).toEqual(expected);
  });

  test('returns correct result', () => {
    const expected = [3];

    const actual = difference([1, 2, 3], [1, 2, 4]);

    expect(actual).toEqual(expected);
  });
});
