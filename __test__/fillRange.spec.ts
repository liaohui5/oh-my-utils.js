import { fillRange } from "../src";

describe('fillRange', () => {
  it('happy path', () => {
    // number: asc
    expect(fillRange(1, 10).join(',')).toBe('1,2,3,4,5,6,7,8,9,10');

    // number: desc
    expect(fillRange(10, 1).join(',')).toBe('10,9,8,7,6,5,4,3,2,1');

    // string: asc
    expect(fillRange('a', 'f').join(',')).toBe('a,b,c,d,e,f');

    // string: desc
    expect(fillRange('f', 'a').join(',')).toBe('f,e,d,c,b,a');
  });
});
