import { throttle } from '../src';

describe('throttle', () => {
  it('happy path', () => {
    const func = vitest.fn();
    const throttledFunc = throttle(func);
    expect(func !== throttledFunc).toBe(true);
  });

  // TODO: unit test - fakeTimer
});
