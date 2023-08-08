/**
 * get a random hex color string
 * @return {string}
 */
export function getRandomHexColor(): string {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}
