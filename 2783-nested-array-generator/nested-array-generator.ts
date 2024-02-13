type MultidimensionalArray = (MultidimensionalArray | number)[]

function traverse(item, result) {
  if ( Array.isArray(item)) {
    if ( item.length === 0) return result;
    for ( const array of item ) {
      traverse(array, result) 
    }
    return;
  }
  result.push(item) 
}

function* inorderTraversal(array: MultidimensionalArray): Generator<number, void, unknown> {
    for ( const item of array ) {
      if (Array.isArray(item)) {
          yield* inorderTraversal(item)
      } else {
        yield item;
      }
    }
    // const result = [];
    // traverse(arr, result)
    // console.log(result)
    // const reversed = result;
    // for ( const item of reversed ) {
    //   yield item;
    // }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */