/**
 * shuffle array items
 * @param array 
 * @returns {Array}
 */
export function shuffle<T>(array: T[]): T[] {
  if (array.length < 1) {
    return [];
  }
  /* @ts-ignore */
  return [].concat(array).sort(() => Math.random() - 0.5).reverse();
}
