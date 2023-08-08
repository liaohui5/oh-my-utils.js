import { isString } from './is';

/**
 * 驼峰式字符串
 * @param str - 要处理的字符串
 * @param firstUpper - 第一个字符是否大写
 * @param separators - 分割符号
 * @returns 处理后的字符串
 */
export function camelCase(str: string, firstUpper: boolean = false, separators: string[] = ['-', '_']): string {
  if (!isString(str)) {
    throw new TypeError('[camelCase]the paramter must be a string');
  }
  if (str.length < 2) {
    return firstUpper ? str : str.toUpperCase();
  }
  let res = '';
  let shouldUpperCase = false;
  for (let i = 0, len = str.length; i < len; i++) {
    let char = str[i];
    if (separators.includes(char)) {
      shouldUpperCase = true;
      continue;
    }
    if (shouldUpperCase || (i === 0 && firstUpper)) {
      char = char.toUpperCase();
    }
    res += char;
    shouldUpperCase = false;
  }

  return res;
}

/**
 * 根据驼峰式字符串切分新的字符串
 * @param str - 要处理的字符串
 * @param separator - 切分符号
 * @returns 处理完的字符串
 */
function splitCamelCase(str: string, separator: string): string {
  if (!isString(str)) {
    throw new TypeError("[splitCamelCase]the 'string' must be a string");
  }
  if (!isString(separator)) {
    throw new TypeError("[splitCamelCase]the 'separator' must be a string");
  }
  if (separator.length > 1) {
    separator = separator[0];
  }

  const isUpperCacse = (char: string) => char === char.toUpperCase();
  let char;
  let res = '';
  for (let i = 0, len = str.length; i < len; i++) {
    char = str[i];
    if (isUpperCacse(char)) {
      if (i > 0) {
        res += separator;
      }
      res += char.toLowerCase();
    } else {
      res += char;
    }
  }
  return res;
}

// 下划线 snake_case
export const snakeCase = (str: string): string => splitCamelCase(str, '_');

// 中横线 kebab-case
export const kebabCase = (str: string): string => splitCamelCase(str, '-');
