/**
 * Returns a random generated integer/number.
 * @param max The maximum number to include in returned generated integer.
 * @param exclude (optional) Number/integer to exclude.
 */
declare const integer: (max: number, exclude?: number) => number;
/**
 * Returns a random generated character.
 * @param length The number of characters to include in returned generated string.
 * @param excludeNumbers (Optional) To exclude numbers in returned generated string.
 */
declare const char: (length: number, excludeNumbers?: boolean) => string;
/**
 * Returns a random generated emoji.
 * @param excludeEmoji (optional) Emoji to exclude.
*/
declare const emoji: (excludeEmoji?: string) => string;
/**
 * Returns a random generated integer/number.
 * @param max The maximum number to include in returned generated float.
 * @param exclude (optional) Number/integer to exclude.
 * @param decimals (optional) Format a number using fixed-point notation.
 */
declare const float: (max: number, exclude?: number, decimals?: number) => number | string;
export { integer, char, emoji, float };
