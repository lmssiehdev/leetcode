function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  for ( let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i+1]) {
      flowerbed[i] = 1;
      ++count;
    }
  }

  return n <= count;
};