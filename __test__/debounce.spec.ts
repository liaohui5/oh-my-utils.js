import { debounce } from '../src/debounce';

describe('debounce', () => {
  it('happy path', () => {
    const func = vitest.fn();
    const debouncedFunc = debounce(func);
    expect(debouncedFunc !== func).toBe(true);
  });
  // it('must be throttled', () => {
  //   // TODO: how to test setTimeout APIs?
  //   let calls = 0;
  //   const func = () => calls++;
  //   const debouncedFunc = debounce(func, 1000);
  //   debouncedFunc();
  //   debouncedFunc();
  //   debouncedFunc();
  //   debouncedFunc();
  //   debouncedFunc();
  //   expect(calls).toBe(1);
  // });
});
