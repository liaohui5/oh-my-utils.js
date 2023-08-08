import { isObject } from './is';

/**
 * 从一个对象中排除一些属性,返回新的对象
 * @param originObject - 源对象 
 * @param omitKeys - 要排除的 key
 * @returns 处理完之后的对象
 */
export function omit<T extends object, K extends keyof T>(originObject: T, omitKeys: K[]): T {
  if (!isObject(originObject)) {
    throw new TypeError("[omit]:'origin' paramter must be a object");
  }
  if (!Array.isArray(omitKeys)) {
    throw new TypeError("[omit]:'keys' paramter must be an array");
  }

  const targetObject = Object.create(null);
  (Object.keys(originObject) as K[]).forEach((key) => {
    if (!omitKeys.includes(key)) {
      targetObject[key] = originObject[key] as T[K];
    }
  });
  return targetObject;
}
