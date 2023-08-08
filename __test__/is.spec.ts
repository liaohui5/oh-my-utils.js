import {
  isBoolean,
  isCallable,
  isEmpty,
  isError,
  isNativePromise,
  isNull,
  isNullable,
  isNumber,
  isObject,
  isPlainObject,
  isPromise,
  isString,
  isUndefind,
} from '../src';

describe('is', () => {
  it('is Number/String/Function/Boolean/Nullable', () => {
    expect(isNumber('1234')).toBe(false);
    expect(isNumber(1234)).toBe(true);

    expect(isString('1234')).toBe(true);
    expect(isString(1234)).toBe(false);

    expect(isBoolean(1234)).toBe(false);
    expect(isBoolean(true)).toBe(true);

    expect(isCallable(Function.prototype)).toBe(true);
    expect(isCallable(Math)).toBe(false); // object

    expect(isNullable(null)).toBe(true);
    expect(isNullable(undefined)).toBe(true);
    expect(isNullable(0)).toBe(false);
  });

  it('isPlainObject', () => {
    const date = new Date();
    expect(isPlainObject(date)).toBe(false);

    const hex = new RegExp('/w/');
    expect(isPlainObject(hex)).toBe(false);

    expect(isPlainObject(Math)).toBe(false);

    const obj1 = {};
    expect(isPlainObject(obj1)).toBe(true);

    const obj2 = Object.create(null);
    expect(isPlainObject(obj2)).toBe(true);
  });

  it('isObject', () => {
    const date = new Date();
    expect(isObject(date)).toBe(true);

    const reg = new RegExp('/w/');
    expect(isObject(reg)).toBe(true);

    // Function
    expect(isObject(Math)).toBe(true);

    const obj1 = {};
    expect(isObject(obj1)).toBe(true);

    const obj2 = Object.create(null);
    expect(isObject(obj2)).toBe(true);
  });

  it('isPromise/isNativePromise', () => {
    const p1 = Promise.resolve(1);
    const p2 = Object.create(Promise.prototype);
    const p3 = {
      then() {},
      catch() {},
    };

    expect(isPromise(p1)).toBe(true);
    expect(isPromise(p2)).toBe(true);
    expect(isPromise(p3)).toBe(true);

    expect(isNativePromise(p1)).toBe(true);
    expect(isNativePromise(p2)).toBe(true);
    expect(isNativePromise(p3)).toBe(false); // 不符合 [object Promise]
  });

  it('isEmpty', () => {
    expect(isEmpty(new Array())).toBe(true);
    expect(isEmpty(new Object())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  it('isNull & isUndefined', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);

    expect(isUndefind(undefined)).toBe(true);
    expect(isUndefind(null)).toBe(false);
  });

  it('isError', () => {
    let e;
    e = new Error('e');
    expect(isError(e)).toBe(true);

    e = Error('e');
    expect(isError(e)).toBe(true);

    e = new ReferenceError('e');
    expect(isError(e)).toBe(true);

    e = new TypeError('e');
    expect(isError(e)).toBe(true);
  });
});
