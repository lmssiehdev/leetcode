function subtractProductAndSum(n: number): number {
    const { product, sum } = Array.from(String(n)).reduce((object, num) => {
      object.product *= Number(num);
      object.sum += Number(num);
      return object
    }, {
      product: 1,
      sum: 0
    })
    console.log(product, sum)
  return product - sum;
};