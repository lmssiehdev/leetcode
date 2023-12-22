const cache = {}

function fib(n: number): number {
  if (n <= 1) return n;

  if (cache[n] != null) return cache[n]

  cache[n] = fib(n - 1) + fib(n - 2 )
  return cache[n]
};