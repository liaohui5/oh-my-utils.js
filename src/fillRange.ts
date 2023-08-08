import { isNumber } from './is';

export function fillRange<T extends number | string>(start: T, end: T): Array<T> {
  const isNumberResult = isNumber(start);
  const startIndex = isNumberResult ? <number>start : String(start).charCodeAt(0);
  const endIndex = isNumberResult ? <number>end : String(end).charCodeAt(0);

  if (startIndex < endIndex) {
    return increment(startIndex, endIndex, isNumberResult);
  } else if (startIndex > endIndex) {
    return decrement(startIndex, endIndex, isNumberResult);
  } else {
    return [start];
  }

  function increment(start: number, end: number, resultIsNumber: boolean): T[] {
    const res: T[] = [];
    for (let i = start; i <= end; i++) {
      res.push(createItem(i, resultIsNumber));
    }
    return res;
  }

  function decrement(start: number, end: number, resultIsNumber: boolean): T[] {
    const res: T[] = [];
    for (let i = start; i >= end; i--) {
      res.push(createItem(i, resultIsNumber));
    }
    return res;
  }

  function createItem(value: T, resultIsNumber: boolean): T {
    return resultIsNumber ? value : String.fromCharCode(value);
  }

}
