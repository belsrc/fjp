import '@babel/register';
import concat from './index';

describe('concat', () => {
  test('returns empty array for two nulls', () => {
    const actual = concat(null, null);

    expect(Array.isArray(actual)).toBeTruthy();
    expect(actual).toHaveLength(0);
  });

  test('returns empty array for two empty arrays', () => {
    const actual = concat([], []);

    expect(Array.isArray(actual)).toBeTruthy();
    expect(actual).toHaveLength(0);
  });

  test('returns concatenated array', () => {
    const actual = concat([1, 2, 3], [4, 5, 6]);

    expect(Array.isArray(actual)).toBeTruthy();
    expect(actual).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('returns concatenated string', () => {
    const actual = concat('unit', 'test');

    expect(typeof actual).toBe('string');
    expect(actual).toBe('unittest');
  });
});
