import { memorize } from '../src';

describe('memorize', () => {
  it('must be return an new function', () => {
    const fn = vitest.fn();
    const newFn = memorize(fn);
    expect(newFn).not.toBe(fn);
  });

  it('must cache the execution results of the function', () => {
    let calls = 0;
    const fn = vitest.fn(() => calls++);
    const sum = (x: number, y: number) => {
      fn();
      return x + y;
    };
    const cachedSum = memorize(sum);
    cachedSum(1, 2);
    cachedSum(1, 2);
    cachedSum(1, 2);
    cachedSum(1, 2);
    expect(calls).toBe(1);

    cachedSum(1, 3);
    cachedSum(1, 3);
    cachedSum(1, 3);
    cachedSum(1, 3);
    expect(calls).toBe(2);
  });

  it('memorize keyMaker', () => {
    let calls = 0;
    const fn = vitest.fn(() => calls++);

    const sum = function(...args: number[]) {
      fn();
      let result = 0;
      for (const item of args) {
        result += item;
      }
      return result;
    };

    const keyMaker = (args: number[]) => args.sort().join(',');
    const cachedSum = memorize(sum, keyMaker);

    cachedSum(1, 2, 3, 4);
    cachedSum(1, 3, 2, 4);
    cachedSum(1, 4, 3, 2);
    expect(calls).toBe(1);
  });
});
