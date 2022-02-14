declare const integer: (max: number, exclude?: number | undefined) => number;
declare const char: (length: number, excludeNumbers?: boolean | undefined) => string;
declare const emoji: (excludeEmoji?: string | undefined) => string;
export { integer, char, emoji };
