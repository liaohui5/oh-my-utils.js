import { uid } from '../src/uid';

describe('id', () => {
  it('happy path', () => {
    let id = uid();
    expect(id).toBe(1);

    id = uid();
    expect(id).toBe(2);

    id = uid();
    expect(id).toBe(3);

    id = uid();
    expect(id).toBe(4);
  });

  it('startValue', () => {
    const startId = 101;
    let id = uid('', startId);
    expect(id).toBe(101);

    id = uid('');
    expect(id).toBe(102);

    id = uid('');
    expect(id).toBe(103);

    id = uid('');
    expect(id).toBe(104);
  });

  it('prefix', () => {
    let id = uid('key_', 1);
    expect(id).toBe('key_1');

    id = uid('key_');
    expect(id).toBe('key_2');

    id = uid('key_');
    expect(id).toBe('key_3');

    id = uid('key_');
    expect(id).toBe('key_4');
  });
});
