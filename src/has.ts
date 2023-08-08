import { isObject, isString } from './is';

/**
 * 判断对象是否有某个 key, example: has(window, 'document.body.getElementById')
 * @param obj - 要取值的对象
 * @param keyPath - 要取值的路径 a.b.c 在 a 对象中取 b 属性(对应值)的 c 属性
 * @returns 是否有某个 key
 */
export function has(obj: object, keyPath: string): boolean {
  if (!isObject(obj)) {
    throw new TypeError("[has]:'obj' must be instance of object");
  }
  if (!isString(keyPath)) {
    throw new TypeError("[has]:'path' must be a string");
  }
  const keyPaths: string[] = keyPath.split('.');
  let res = obj;
  for (const key of keyPaths) {
    if (!res.hasOwnProperty(key)) {
      return false;
    }
    /* @ts-ignore */
    const val = res[key];
    if (isObject(val)) {
      res = val;
    }
  }
  return true;
}
