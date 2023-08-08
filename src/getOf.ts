import { isObject, isString } from './is';

/**
 * 实现类似 ?. 操作符号的效果
 * @param obj - 要取值的对象
 * @param keyPath - 要取值的路径
 * @param defaultValue - 如果没取到值的默认值
 * @returns any
 */
export function getOf(obj: object, keyPath: string, defaultValue: any = undefined): any {
  if (!isObject(obj)) {
    throw new TypeError("[getOf]:the 'obj' paramter must be an object");
  }
  const isStr = isString(keyPath);
  if (!isStr) {
    throw new TypeError("[getOf]: the 'key' paramter must be an string");
  }
  if (isStr && keyPath.length === 0) {
    return defaultValue;
  }

  const keys: string[] = keyPath.split('.');
  const len = keys.length;
  let res = obj;
  let i = 0;
  while (i < len) {
    const key = keys[i];
    if (!isObject(res)) {
      return defaultValue;
    }
    if (res.hasOwnProperty(key)) {
      /* @ts-ignore */
      res = res[key];
    } else {
      return defaultValue;
    }
    i++;
  }
  return res;
}
