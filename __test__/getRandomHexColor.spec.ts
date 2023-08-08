import { getRandomHexColor } from "../src";

describe('getRandomColor16', () => {
  it('happy path', () => {
    const color = getRandomHexColor();
    expect(/^#[a-f0-9]{5}/.test(color)).toBe(true);
  });
})
