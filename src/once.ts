const caches = new WeakSet();

/**
 * 自会让函数调用一次
 * @param func - 要调用的函数
 * @param thisArg - func 调用时 this 的指向
 * @returns 新的函数
 */
export function once(func: Function, thisArg?: object): Function {
  return function(...args: unknown[]) {
    if (caches.has(func)) {
      return;
    }
    caches.add(func);
    func.apply(thisArg, args);
  };
}
