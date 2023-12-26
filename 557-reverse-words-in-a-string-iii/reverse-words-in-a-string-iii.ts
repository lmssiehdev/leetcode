function reverseWords(s: string): string {
    const words = s.split(" ");

    return words.map((word) => word.split("").reverse().join("")).join(" ")
};