const cache = new Map<string, bigint>();

function at(x: number, y: number): bigint {
  if (x < y) {
    return 0n;
  }
  if (x == 0 || y == 0) {
    return 1n;
  }

  const key = `${x}-${y}`;
  const cached = cache.get(key);
  if (cached) {
    return cached;
  }

  const value = at(x - 1, y) + at(x, y - 1);
  cache.set(key, value);
  return value;
}
