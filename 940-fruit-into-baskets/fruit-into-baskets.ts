function totalFruit(fruits: number[]): number {
    let basket: Record<string, number> = {};
    let maxFruits = Number.MIN_SAFE_INTEGER;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        const curr = fruits[windowEnd];

        while (Object.keys(basket).length >= 2 && basket[curr] === undefined) {
            basket[fruits[windowStart]]--;
            if (basket[fruits[windowStart]] === 0) {
                delete basket[fruits[windowStart]];
            }
            windowStart++;
        }

        if (basket[curr] !== undefined) {
            basket[curr]++;
        } else {
            basket[curr] = 1;
        }

        maxFruits = Math.max(maxFruits, Object.values(basket).reduce((c, p) => c + p, 0))
    }
    return maxFruits
};