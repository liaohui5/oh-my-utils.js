/**
 * 返回指定范围内的随机数
 * @param min - 最小值
 * @param max - 最大值
 * @returns 返回值
 */
export function range(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

