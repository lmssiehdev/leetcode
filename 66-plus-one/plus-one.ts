function plusOne(digits: number[]): number[] {
    return Array.from((BigInt(digits.join('')) + BigInt('1')).toString(), Number)
};