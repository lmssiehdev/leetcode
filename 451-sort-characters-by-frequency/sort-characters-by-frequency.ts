function frequencySort(s: string): string {
    const charCount = Array.from(s).reduce((obj, char) => {
      if (obj[char] == null) obj[char] = 1;
      else obj[char]++
      return obj;
    }, {})
    const sortedChar = Object.entries(charCount)
    .sort(([, v1], [, v2]) => (v2 as number) -(v1 as number)).map(([key]) => key);

    return sortedChar.reduce((string, char) => {
      const charFreq = charCount[char as keyof typeof charCount];
      const newString = Array(charFreq).fill(char).join("")
      console.log(newString)
      return `${string}${newString}`
    }, "")
};