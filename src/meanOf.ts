import { isNumber } from './is';

/**
 * 获取一组可迭代数据(number类型)的平均值
 * @param values - 可迭代数据
 * @returns number
 */
export function meanOf(values: Iterable<number>): number {
  let sum = 0;
  let numbersTotal = 0;
  for (const item of values) {
    if (isNumber(item)) {
      sum += item;
      numbersTotal++;
    }
  }
  return sum / numbersTotal;
}
