/**
 * 函数防抖
 * @param func - 要防止抖动的函数
 * @param wait - 触发频率(等待时间)
 * @param immediateInvok - 第一次是否立即调用
 * @param thisArg - 调用函数的时候 this 指向
 * @returns 
 */
export function debounce(
  func: Function,
  wait: number = 100,
  immediateInvok = false,
  thisArg?: object
): (...args: any[]) => void {
  let timer: NodeJS.Timeout;
  let shouldExecute = Boolean(immediateInvok);

  return function(...args: unknown[]): void {
    timer && clearTimeout(timer);
    if (shouldExecute) {
      func.apply(thisArg, ...args);
      shouldExecute = false;
    } else {
      timer = setTimeout(func.bind(thisArg, ...args), wait);
    }
  };
}
