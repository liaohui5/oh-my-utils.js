import { once } from '../src/once';

describe('once', () => {
  it('happy path', () => {
    let calls = 0;
    const fn = vitest.fn(() => calls++);
    const onceFn = once(fn);
    onceFn();
    onceFn();
    onceFn();
    onceFn();
    onceFn();
    onceFn();
    expect(calls).toBe(1);
  });
});
