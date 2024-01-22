function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sorted = Array.from(nums).sort((a, b) => a - b)
    return nums.map((_, idx) => sorted.indexOf(_))
};