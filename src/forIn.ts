/**
 * forIn 遍历对象
 * @template T extends object - 要遍历的对象
 * @template K extends keyof T - 对象所有的 key
 * @param obj - 要遍历的对象
 * @param callback - 遍历处理函数
 * @param onlyOwner - 是否只遍历自身的属性
 */
export function forIn<T extends object, K extends keyof T>(obj: T, callback: (key: K, value: T[K], source: T) => void, onlyOwner: boolean): void {
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  for (let key in obj) {
    if (onlyOwner) {
      /* @ts-ignore */
      hasOwnProperty.call(obj, key) && callback(key, obj[key], obj);
    } else {
      /* @ts-ignore */
      callback(key, obj[key], obj);
    }
  }
}

