function totalFruit(fruits: number[]): number {
    let basket = new Map<string | number, number>();
    let maxFruits = Number.MIN_SAFE_INTEGER;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        const curr = fruits[windowEnd];

        while (basket.size >= 2 && !basket.has(curr)) {
            const first = fruits[windowStart];
            basket.set(first, basket.get(first) - 1)
            if (basket.get(first) === 0) {
                basket.delete(first);
            }
            windowStart++;
        }

        basket.set(curr, ( basket.get(curr) ?? 0 ) + 1 )

        maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1)
    }
    return maxFruits
};