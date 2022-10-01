/**
 * Returns a random generated integer/number.
 * @param max The maximum number to include in returned generated integer.
 * @param exclude (optional) Number/integer to exclude.
 */
declare const integer: (max: number, exclude?: number | undefined) => number;
/**
 * Returns a random generated character.
 * @param length The number of characters to include in returned generated string.
 * @param excludeNumbers (Optional) To exclude numbers in returned generated string.
 */
declare const char: (length: number, excludeNumbers?: boolean | undefined) => string;
/**
 * Returns a random generated emoji.
 * @param excludeEmoji (optional) Emoji to exclude.
*/
declare const emoji: (excludeEmoji?: string | undefined) => string;
/**
 * Returns a random generated float.
 * @param max The maximum number to include in returned generated float.
 * @param decimal Format a number using fixed-point notation.
 * @param exclude (optional) Number/integer to exclude.
 */
declare const float: (max: number, decimal: number, exclude?: number | undefined) => number | string;
export { integer, char, emoji, float };
