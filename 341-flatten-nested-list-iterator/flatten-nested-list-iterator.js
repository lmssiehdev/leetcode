function flatten(array) {
  const data = []

  for (let char of array) {
    if (char.isInteger()) data.push(char.getInteger())
    else data.push(...flatten(char.getList()))
  }

  return data
}

class NestedIterator {
  constructor(nestedList) {
    this.data = flatten(nestedList)
    this.length = 0
  }

  hasNext() {
    return this.length < this.data.length
  }

  next() {
    return this.data[this.length++]
  }
}