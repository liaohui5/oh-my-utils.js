// cache toString
const toString = Object.prototype.toString;
const FuncToString = Function.prototype.toString;

// get value object tag like: [object Array]
export function getObjectTag(value: any): string {
  return toString.call(value);
}

// value is object or not
export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object';
}

// value instance of Object or not
export function isPlainObject(value: any): boolean {
  return getObjectTag(value) === '[object Object]';
}

// value is number or not
export function isNumber(value: any): boolean {
  return typeof value === 'number';
}

// value is string or not
export function isString(value: any): boolean {
  return typeof value === 'string';
}

// value is undefined or not
export function isUndefind(value: any): boolean {
  return value === undefined;
}

// value is null or not
export function isNull(value: any): boolean {
  return value === null;
}

// value is null or undefined
export function isNullable(value: any): boolean {
  return Boolean(value === null || value === undefined);
}

// value is boolean or not
export function isBoolean(value: any): boolean {
  return typeof value === 'boolean';
}

// value is symbol or not
export function isSymbol(value: any): boolean {
  return typeof value === 'symbol';
}

// value is function or not
export function isFunction(value: any): boolean {
  return typeof value === 'function';
}
export const isCallable = isFunction;

// value is isNative function or not
export function isNativeFunction(func: Function): boolean {
  return isFunction(func) && FuncToString.call(func).includes('[native code]');
}

// value is promise like or not
export function isPromise(p: any): boolean {
  return isObject(p) && isFunction(p.then);
}

// value is ES6 native promise or not
export function isNativePromise(p: any): boolean {
  return isObject(p) && getObjectTag(p) === '[object Promise]';
}

// value instance of Date or not
export function isDate(value: any): boolean {
  return getObjectTag(value) === '[object Date]';
}

// value instance of RegExp or not
export function isRegexp(value: any): boolean {
  return getObjectTag(value) === '[object RegExp]';
}

// isMap & isWeakMap
export function isMap(value: any): boolean {
  return isObject(value) && getObjectTag(value) === '[object Map]';
}
export function isWeakMap(value: any): boolean {
  return isObject(value) && getObjectTag(value) === '[object WeakMap]';
}

// isSet & isWeakSet
export function isSet(value: any): boolean {
  return isObject(value) && getObjectTag(value) === '[object Set]';
}
export function isWeakSet(value: any): boolean {
  return isObject(value) && getObjectTag(value) === '[object WeakSet]';
}

// value is Element Node or not
export function isElement(value: any): boolean {
  return isObject(value) && value.nodeType === 1 && !isPlainObject(value);
}

// is errors object, it's includes
// Error EvalError RangeError ReferenceError SyntaxError TypeError URIError
export function isError(value: any): boolean {
  if (!isObject(value)) {
    return false;
  }
  const tag = getObjectTag(value);
  return Boolean(
    tag === '[object Error]' ||
    tag === '[object DOMException]' ||
    (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value))
  );
}

// is length property number or not
export function isLength(len: number) {
  return len >= 0 && Number.isSafeInteger(len);
}

// isArray / isArrayLike
export const isArray = Array.isArray;
export function isArrayLike<T extends { length: number }>(value: T): boolean {
  if (isFunction(value)) {
    return false;
  }
  return isLength(value.length);
}

// value is File | Blob object or not
export function isFile(value: any) {
  const tag = getObjectTag(value);
  return tag === '[object Blob]' || tag === '[object File]';
}

// is empty Array/Object/Set/Map values
export function isEmpty(value: any): boolean {
  if (isPlainObject(value)) {
    return Object.keys(value).length === 0;
  } else if (isString(value) || Array.isArray(value) || isArrayLike(value)) {
    return value.length === 0;
  } else if (isMap(value) || isSet(value) || isFile(value)) {
    return value.size === 0;
  } else {
    return false;
  }
}

// isNode
export function isNode() {
  return getObjectTag(globalThis) === '[object global]' && isUndefind(window);
}

// isBrowser
export function isBrowser() {
  return window && getObjectTag(window) === '[object Window]';
}
