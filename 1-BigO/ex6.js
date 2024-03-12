//Space complexity - Amount of memory an algorithm needs to run
// When input size increases space complexity also increases
// space complexity is not just the size of the input but also the size of the algorithm

// example 1

// in below code doesnt matter what the size of array is
//it will only going to return us only one single thing

const funnyNumber = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

let score = [420, 96, 12, 69, 77];

console.log(funnyNumber(score));

//Above code has o(1) space complexity

//Example 2

// In below code when n is increasing grows the size of the array as well.

const funnyNumberArray = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i * 69);
  }
  return array;
};

console.log(funnyNumberArray(5));
// Above code has O(n) space complexity

//In javascript
//primitive types ->
// Boolean,num,undefined,null => Constant space complexity
//String,arrays,objects => dynamic space complexity - change according to the input
