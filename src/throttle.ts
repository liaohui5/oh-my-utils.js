export function throttle(func: Function, wait: number = 100, thisArg?: object): (...args: any[]) => void {
  let timer: NodeJS.Timeout;
  let startTime = Date.now();
  return function(...args: any[]): void {
    timer && clearTimeout(timer);
    const nowTime = Date.now();
    if (startTime + wait >= nowTime) {
      func.apply(thisArg, args);
    } else {
      timer = setTimeout(func.bind(thisArg, ...args), wait);
    }
  };
}
