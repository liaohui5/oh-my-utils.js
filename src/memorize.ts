interface KeyMakerFunc {
  (...args: any[]): string;
}

interface MemorizedFunc {
  cacheMap: Map<string, unknown>;
  (...args: unknown[]): unknown;
}

/**
 * 函数记忆
 * @param func - 要缓存接过的函数
 * @param keyMaker - 生成缓存 key 的函数
 * @returns 返回缓存后的函数
 */
export function memorize(func: Function, keyMaker: KeyMakerFunc = JSON.stringify): MemorizedFunc {
  const memorized: MemorizedFunc = (...args: unknown[]) => {
    const key = keyMaker(args);
    if (!memorized.cacheMap.has(key)) {
      memorized.cacheMap.set(key, func(...args));
    }
    return memorized.cacheMap.get(key);
  };
  memorized.cacheMap = new Map();
  return memorized;
}
