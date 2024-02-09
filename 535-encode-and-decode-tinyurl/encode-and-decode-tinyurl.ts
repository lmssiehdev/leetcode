/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
	  let codes: number[] = [];
    for ( let i = 0; i < longUrl.length; i++ ) {
      codes.push(longUrl.charCodeAt(i))
    }
    const result = codes.join("|");
    return result;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  const chars = shortUrl.split("|") as string[];

  for ( let i = 0; i < chars.length; i++) {
    chars[i] = (String.fromCharCode(Number(chars[i])))
  }

  return chars.join("");
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */