import { isDate, isString } from './is';

/**
 * 根据模板格式化字符串
 * @param time - 要格式化的时间
 * @param template - 格式化模板
 * @returns 返回格式化后的时间字符串
 */
export function formateDate(time: Date | string, template: string): string {
  let date: Date;
  if (isString(time)) {
    const timestamps = Date.parse(<string>time);
    if (Number.isNaN(timestamps)) {
      throw new TypeError('[formateDate]Invalid Date string');
    } else {
      date = new Date(timestamps);
    }
  } else if (isDate(time)) {
    date = <Date>time;
  } else {
    throw new TypeError('[formateDate]time must be Date or string');
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dates = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDay() + 1;

  const fillZero = (value: number): string => (value < 10 ? `0${value}` : String(value));

  const templateMap = {
    yyyy: year,
    mm: month,
    MM: fillZero(month),
    dd: dates,
    DD: fillZero(dates),
    hh: hours,
    HH: fillZero(hours),
    ii: minutes,
    II: fillZero(minutes),
    ss: seconds,
    SS: fillZero(seconds),
    ww: day,
  };

  let formated = template;
  for (const [key, value] of Object.entries(templateMap)) {
    formated = formated.replace(key, String(value));
  }
  return formated;
}
