import '@babel/register';
import compact from './index';

describe('compact', () => {
  test('returns empty array for null arg', () => {
    const actual = compact();

    expect(Array.isArray(actual)).toBeTruthy();
    expect(actual).toHaveLength(0);
  });

  test('returns array', () => {
    const arr = [0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34];
    const actual = compact(arr);

    expect(Array.isArray(actual)).toBeTruthy();
  });

  test('returns correct value', () => {
    const arr = [0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34];
    const expected = [1, 2, 3, 'a', 's', 34];

    const actual = compact(arr);

    expect(actual).toEqual(expected);
  });
});
