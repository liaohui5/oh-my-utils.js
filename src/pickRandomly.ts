import { range } from './range';

/**
 * 从一个可迭代数据列表中随机获取一个值
 * @template T - 必须是一个迭代数据
 * @param items - 列表数据
 * @returns 从列表中随机获取的值
 */
export function pickRandomly<T>(items: Iterable<T>): T {
  const array = Array.isArray(items) ? items : Array.from(items);
  const len = array.length;
  if (len < 2) {
    return array[0];
  }
  return array[range(0, len)];
}
