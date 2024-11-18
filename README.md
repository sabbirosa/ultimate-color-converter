# Ultimate Color Converter

A lightweight utility library for converting colors between HEX, RGB, and HSL formats. Simplify your color manipulation tasks with this easy-to-use and precise library.

## Why Ultimate Color Converter?

Colors are an integral part of web and application development. Whether you're styling a webpage, creating graphics, or building a custom color picker, you often need to convert colors between different formats (e.g., HEX, RGB, HSL).

Ultimate Color Converter provides a robust, reliable, and precise way to perform these conversions.

## Features

- **Convert HEX to RGB**: Easily convert HEX color codes (e.g., #ffffff) into RGB format.
- **Convert RGB to HEX**: Transform RGB values into a HEX color code.
- **Convert RGB to HSL**: Get the HSL representation from an RGB color.
- **Convert HSL to RGB**: Transform HSL values into RGB format.
- **Validation**: Handles invalid inputs with meaningful error messages.

## Installation

Install the library via npm:

```bash
npm install ultimate-color-converter
```

## Usage

### Importing the Library

```typescript
import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
} from "ultimate-color-converter";
```

### Examples

#### 1\. **Convert HEX to RGB**

```typescript
import { hexToRgb } from "ultimate-color-converter";
const rgb = hexToRgb("#ffffff");
console.log(rgb);

/* 
    Output:  { r: 255, g: 255, b: 255 }
*/
```

#### 2\. **Convert RGB to HEX**

```typescript
import { rgbToHex } from "ultimate-color-converter";
const hex = rgbToHex({ r: 255, g: 255, b: 255 });
console.log(hex);

/*
    Output:  "#ffffff"
*/
```

#### 3\. **Convert RGB to HSL**

```typescript
import { rgbToHsl } from "ultimate-color-converter";
const hsl = rgbToHsl({ r: 255, g: 255, b: 255 });
console.log(hsl);

/*
    Output:  { h: 0, s: 0, l: 100 }
*/
```

#### 4\. **Convert HSL to RGB**

```typescript
import { hslToRgb } from "ultimate-color-converter";
const rgb = hslToRgb({ h: 0, s: 0, l: 100 });
console.log(rgb);

/*
    Output:  { r: 255, g: 255, b: 255 }
*/
```

## Package Documentation

### hexToRgb(hex: string): RGB

- **Description**: Converts a HEX color code to RGB format.
- **Parameters**:

  - hex (string): The HEX color code (e.g., #ffffff or ffffff).

- **Returns**:

  - RGB (object): { r: number, g: number, b: number }.

- **Throws**:

  - Error if the HEX code is invalid.

### rgbToHex(rgb: RGB): string

- **Description**: Converts an RGB color to a HEX color code.
- **Parameters**:

  - rgb (object): { r: number, g: number, b: number }.

- **Returns**:

  - HEX (string): A valid HEX color code (e.g., #ffffff).

- **Throws**:

  - Error if RGB values are not between 0 and 255.

### rgbToHsl(rgb: RGB): HSL

- **Description**: Converts an RGB color to HSL format.
- **Parameters**:

  - rgb (object): { r: number, g: number, b: number }.

- **Returns**:

  - HSL (object): { h: number, s: number, l: number }, where:

    - h is the hue (0–360).
    - s is the saturation percentage (0–100).
    - l is the lightness percentage (0–100).

### hslToRgb(hsl: HSL): RGB

- **Description**: Converts an HSL color to RGB format.
- **Parameters**:

  - hsl (object): { h: number, s: number, l: number }.

- **Returns**:

  - RGB (object): { r: number, g: number, b: number }.

## Error Handling

The library validates input values and throws meaningful error messages for invalid inputs. For example:

- ```typescript
  hexToRgb("#zzz"); // Throws: Error: Invalid HEX color format
  ```
- ```typescript
  rgbToHex({ r: 300, g: 255, b: 255 }); // Throws: Error: RGB values must be between 0 and 255
  ```

## Why Use Ultimate Color Converter?

- **Accuracy**: Precision in conversions ensures your colors are always correct.
- **Efficiency**: Lightweight and optimized for performance.
- **Error-Resistant**: Built-in validation handles invalid inputs gracefully.
- **Developer-Friendly**: Clear documentation and simple API make it easy to use.

## Contributing

We welcome contributions! If you find bugs or have ideas for new features, please open an issue or submit a pull request on [GitHub](https://github.com/sabbirosa/ultimate-color-converter).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
