import '@babel/register';
import deviation from './index';

describe('deviation', () => {
  test('returns number for sample deviation', () => {
    const arr = [10, 2, 38, 23, 38, 23, 21];
    const expected = 'number';

    const actual = deviation(false, arr);

    expect(typeof actual).toBe(expected);
  });

  test('returns number for population deviation', () => {
    const arr = [10, 2, 38, 23, 38, 23, 21];
    const expected = 'number';

    const actual = deviation(true, arr);

    expect(typeof actual).toBe(expected);
  });

  test('returns correct value for sample deviation', () => {
    const arr = [10, 2, 38, 23, 38, 23, 21];
    const expected = 13.284434142114991;

    const actual = deviation(false, arr);

    expect(actual).toBe(expected);
  });

  test('returns correct value for population deviation', () => {
    const arr = [10, 2, 38, 23, 38, 23, 21];
    const expected = 12.29899614287479;

    const actual = deviation(true, arr);

    expect(actual).toBe(expected);
  });
});
