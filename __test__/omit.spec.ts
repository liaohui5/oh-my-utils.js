import { omit } from '../src/omit';

describe('omit', () => {
  it('happy path', () => {
    const origin = {
      foo: 'foo-val',
      bar: 'bar-val',
      baz: 'baz-val',
    };
    const target = omit(origin, ['foo']);
    expect(origin !== target).toBe(true);
    expect(target).toEqual({
      bar: 'bar-val',
      baz: 'baz-val',
    });
  });
});

