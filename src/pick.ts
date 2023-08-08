import { isObject } from './is';

/**
 * 在一个对象中挑选一个 key, 然后返回新对象 pick({a:1, b:2}, ['a', 'c'])
 * @template T extends object - 必须是对象
 * @template K extends keyof T - 对象中的 key
 * @param origin - 源对象
 * @param keys - 挑选的 key
 * @param defaultValue - 如果 key 不存在源对象中, 使用默认值
 * @returns 处理后的新对象
 */
export function pick<T extends object, K extends keyof T>(origin: T, keys: K[], defaultValue = undefined): object {
  if (!isObject(origin)) {
    throw new TypeError("[pick]:'origin' paramter must be a object");
  }
  if (!Array.isArray(keys)) {
    throw new TypeError("[pick]:'keys' paramter must be an array");
  }

  const target = Object.create(null);
  for (const key of keys) {
    /* @ts-ignore */
    target[key] = origin[key] ? origin[key] : defaultValue;
  }
  return target;
}
