import { getOf } from '../src/getOf';

describe('get', () => {
  it('happy path', () => {
    const obj = {
      name: 'haha',
    };
    const value1 = getOf(obj, 'name', 'default-value');
    expect(value1).toBe('haha');
    const value2 = getOf(obj, 'fullname', 'default-value');
    expect(value2).toBe('default-value');
  });

  it('should be throw error when param invalid', () => {
    expect(() => {
      /* @ts-ignore */
      getOf(false, 'xxx');
    }).toThrow(/must be an object/i);

    expect(() => {
      /* @ts-ignore */
      getOf({}, false);
    }).toThrow(/must be an string/i);
  });

  it('should be support nested keypath', () => {
    const obj = {
      fullName: {
        firstName: 'a',
        nestedObj: {
          foo: {
            bar: {
              val: 1,
            },
          },
        },
      },
    };
    const val1 = getOf(obj, 'fullName.firstName', 'first-name');
    const val2 = getOf(obj, 'fullName.lastName', 'last-name');
    const val3 = getOf(obj, 'fullName.nestedObj.foo.bar.val', true);
    expect(val1).toBe('a');
    expect(val2).toBe('last-name');
    expect(val3).toBe(1);
  });
});
