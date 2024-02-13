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

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
    const result = [];
    traverse(arr, result)
    console.log(result)
    const reversed = result;
    for ( const item of reversed ) {
      yield item;
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */