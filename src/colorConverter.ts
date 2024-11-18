export type RGB = { r: number; g: number; b: number };
export type HSL = { h: number; s: number; l: number };

/**
 * Converts HEX to RGB
 * @param hex - HEX color code (e.g., "#ffffff" or "ffffff")
 * @returns RGB object
 */
export function hexToRgb(hex: string): RGB {
  const cleanedHex = hex.replace(/^#/, "");

  if (cleanedHex.length !== 6) {
    throw new Error("Invalid HEX color format");
  }

  const bigint = parseInt(cleanedHex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

/**
 * Converts RGB to HEX
 * @param rgb - RGB object
 * @returns HEX color code
 */
export function rgbToHex({ r, g, b }: RGB): string {
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new Error("RGB values must be between 0 and 255");
  }

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/**
 * Converts RGB to HSL
 * @param rgb - RGB object
 * @returns HSL object
 */
export function rgbToHsl({ r, g, b }: RGB): HSL {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === r) {
      h = ((g - b) / delta) % 6;
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
  }

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return {
    h,
    s: parseFloat((s * 100).toFixed(2)),
    l: parseFloat((l * 100).toFixed(2)),
  };
}

/**
 * Converts HSL to RGB
 * @param hsl - HSL object
 * @returns RGB object
 */
export function hslToRgb({ h, s, l }: HSL): RGB {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}
