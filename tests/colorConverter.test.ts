import { hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from "../src/colorConverter";

test("Convert HEX to RGB", () => {
  expect(hexToRgb("#ffffff")).toEqual({ r: 255, g: 255, b: 255 });
});

test("Convert RGB to HEX", () => {
  expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe("#ffffff");
});

test("Convert RGB to HSL", () => {
  expect(rgbToHsl({ r: 255, g: 0, b: 0 })).toEqual({ h: 0, s: 100, l: 50 });
});

test("Convert HSL to RGB", () => {
  expect(hslToRgb({ h: 240, s: 100, l: 50 })).toEqual({ r: 0, g: 0, b: 255 });
});
