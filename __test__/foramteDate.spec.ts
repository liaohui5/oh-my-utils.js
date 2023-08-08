import { formateDate } from '../src/formatDate';

describe('formateDate', () => {
  it('happy path', () => {
    const dateStr = '2023-4-5 5:11:1';
    const date = new Date(dateStr);
    const formated = formateDate(date, 'yyyy/MM/DD HH:II:SS');
    expect(formated).toBe('2023/04/05 05:11:01');
  });

  it('parse date when give a string', () => {
    const dateStr = '2023-4-5 5:11:1';
    const formated1 = formateDate(dateStr, 'yyyy-MM-DD HH:II:SS');
    const formated2 = formateDate(dateStr, 'yyyy-MM-DD');
    expect(formated1).toBe('2023-04-05 05:11:01');
    expect(formated2).toBe('2023-04-05');
  });

  it('should be throw when input a invlid date string', () => {
    expect(() => {
      formateDate('abc', 'yyyy-MM-DD');
    }).toThrow(/Invalid Date string/);
  });
});
