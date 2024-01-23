function subtractProductAndSum(n: number): number {
    const numArray = Array.from(String(n)).map(Number) 
    const { product, sum } = numArray.reduce((object, num) => {
      object.product *= Number(num);
      object.sum += Number(num);
      return object
    }, {
      product: 1,
      sum: 0
    })
  return product - sum;
};