import { range } from '../src';

describe('range', () => {
  it('happy path', () => {
    const rand: number = range(0, 10);
    expect(rand >= 0 && rand <= 10).toBe(true);
  });
});
