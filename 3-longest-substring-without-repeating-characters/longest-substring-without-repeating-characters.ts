function lengthOfLongestSubstring(s: string): number {
    const windowItems = new Set();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; ++end) {
        const curr = s[end];

        if (!windowItems.has(curr)) {
            maxLength = Math.max(maxLength, end - start + 1);
            windowItems.add(curr);
        } else {
            while (windowItems.has(curr)) {
                const firstItem = s[start];
                windowItems.delete(firstItem);
                ++start; // Change this line to --start
            }
            windowItems.add(curr);
        }
    }

    return maxLength;
}
