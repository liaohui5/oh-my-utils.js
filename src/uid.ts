import { isNumber, isString } from './is';

let __unique_id = 0;
export function uid(prefix = '', resetValue = 0): string | number {
  if (!isString(prefix)) {
    throw new TypeError("[uid]'prefix' must be a string");
  }
  if (!isNumber(resetValue)) {
    throw new TypeError("[uid]'resetValue' must be a number");
  }

  if (resetValue !== 0) {
    __unique_id = resetValue;
  } else {
    __unique_id++;
  }

  return prefix ? `${prefix}${__unique_id}` : __unique_id;
}
