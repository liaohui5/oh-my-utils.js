import { shuffle } from '../src';

describe('shuffle', () => {
  it('happy path', () => {
    const onlyOne = [1];
    expect(shuffle(onlyOne)).toEqual([1]);

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const shuffleArray = shuffle(arr);
    expect(shuffleArray.join('')).not.toBe(arr.join(''));
  });
});
