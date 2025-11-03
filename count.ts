export function count(n: number) {
  const grid: bigint[][] = [];

  function set(x: number, y: number, v: bigint) {
    if (!grid[y]) {
      grid[y] = [];
    }
    grid[y][x] = v;
  }

  function get(x: number, y: number): bigint {
    return grid[y] ? (grid[y][x] ?? 0n) : 0n;
  }

  for (let y = 0; y <= n; ++y) {
    for (let x = y; x <= n; ++x) {
      // init base
      if (y == 0) {
        set(x, 0, 1n);
        continue;
      }

      const below = get(x, y - 1);

      // on the diagonal (x=y)
      if (x == y) {
        set(x, y, below);
        continue;
      }

      const left = get(x - 1, y);
      set(x, y, left + below);
    }
  }

  return get(n, n);
}
