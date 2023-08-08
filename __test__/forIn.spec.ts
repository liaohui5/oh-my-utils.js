import { forIn } from '../src/forIn';

describe('forIn', () => {
  it('happy path', () => {
    const obj = {
      id: 1,
      name: 'tom',
    };

    let calls = 0;
    const fn = vitest.fn(() => calls++);
    forIn<typeof obj>(obj, fn);

    expect(calls === Object.keys(obj).length).toBe(true);
  });

  it('onlyOwnProperty', () => {
    const obj = Object.create({
      id: 1,
      name: 'tom',
    });
    obj.email = 'xxx@yyy.com';
    obj.password = '123456';

    let calls = 0;
    const fn = vitest.fn(() => calls++);
    forIn<typeof obj>(obj, fn, false);
    expect(calls).toBe(4);
  });
});
