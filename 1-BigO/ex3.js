function someOperations(n) {
  //3 operations - Despite n this algorithms run same amount of time
  return (n * (n + 5)) / 2;
}

console.log(someOperations(1000));

//if code has a constant operatons it has o(1) time complexity
