import { has } from '../src/has';

describe('has', () => {
  it('happy path', () => {
    const obj = {
      name: {
        firstName: 'x',
        // lastName: 'y'
      },
    };

    const hasFirstName = has(obj, 'name.firstName');
    const hasLastName = has(obj, 'name.lastName');

    expect(hasFirstName).toBe(true);
    expect(hasLastName).toBe(false);
  });

  it('deep nseted object', () => {
    const obj = {
      foo: {
        bar: {
          baz: {
            value: 'hello',
          },
        },
      },
    };
    const hasValue = has(obj, 'foo.bar.baz.value');
    expect(hasValue).toBe(true);
  });
});
