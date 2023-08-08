import { chunk } from '../src/chunk';

describe('chunk', () => {
  it('happy path', () => {
    const ary = 'abc'.split('');
    const chunks = chunk(ary, 5);
    expect(chunks).toEqual([
      // must be an array -> Array<any[]>
      ['a', 'b', 'c'],
    ]);

    const arr = 'abcdefghijklm'.split('');
    const [chunk1, chunk2, chunk3] = chunk(arr, 5);
    expect(chunk1.join('')).toBe('abcde');
    expect(chunk2.join('')).toBe('fghij');
    expect(chunk3.join('')).toBe('klm');
  });
});
