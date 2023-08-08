/**
 * Paging Arrays
 * @params {array} array
 * @params {number} size default 1
 * @return {Array<any[]>} result
 * @throw TypeError
 */
export function chunk<T>(array: T[], size: number = 1): Array<T[]> {
  size = Math.max(Math.floor(size), 0);

  const len = array.length;
  if (len === 0 || size === 0) {
    return [];
  }

  if (len <= size) {
    return [array];
  }

  const pages = Math.ceil(len / size);
  const result: T[][] = new Array(pages);
  for (let i = 0; i < pages; i++) {
    result[i] = array.slice(i * size, (i + 1) * size);
  }
  return result;
}
