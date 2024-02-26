function printBoth(n) {
  // n ^ 2 Operations => O(n^2)
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(printBoth(4));
