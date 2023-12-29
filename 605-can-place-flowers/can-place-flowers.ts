function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  flowerbed.forEach((curr, idx) => {
    if (!flowerbed[idx - 1]  && !curr && !flowerbed[idx+1]) {
      flowerbed[idx] = 1;
      ++count;
    }
  })


  return n <= count;
};