import { meanOf } from '../src/meanOf';

describe('meanOfArray', () => {
  it('happy path', () => {
    const values = [1, '2', 3, false, 5, 7, 9];
    const avg = meanOf(values); // ignore other type values
    expect(avg).toBe(5);
  });
});
