import { pickRandomly } from "../src";

describe('pickRandomly', () => {
  it('pickRandomly:array', () => {
    const arr = [1, 2, 3, 4];
    const r = pickRandomly(arr);
    expect(arr.includes(r)).toBe(true);
  });

  it('pickRandomly:set', () => {
    const set = new Set([1, 2, 3, 4]);
    const r = pickRandomly(set);
    expect(Array.from(set).includes(r)).toBe(true);
  });

  it('pickRandomly:map', () => {
    const map = new Map<string, string>();
    const str = 'abcde';
    str.split('').forEach(item => map.set(item, item));

    const r = pickRandomly(map.values());
    expect(str.includes(r)).toBe(true);
  });

})
