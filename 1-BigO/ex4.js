function GoingUpDown(n) {
  //2n + 3 Operations - number of operations depend on the n
  console.log("Going forward!");

  for (var i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("At the End,Going back");

  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }

  console.log("At the start!");

  return "finished";
}

console.log(GoingUpDown(2));

//Above code has o(n) time complexity
//and complexity increase in constant way.

//o(1) has better time complexity
