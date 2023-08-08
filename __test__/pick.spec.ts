import { pick } from '../src';

describe('pick', () => {
  it('happy path', () => {
    const origin = {
      foo: 'foo',
      bar: 'bar',
      baz: 'baz',
    };
    const target = pick(origin, ['foo', 'baz']);
    expect(target !== origin).toBe(true);
    expect(target).toEqual({
      foo: 'foo',
      baz: 'baz',
    });
  });
});
