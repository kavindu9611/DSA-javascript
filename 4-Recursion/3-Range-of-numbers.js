// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output:[ 0, 1, 2, 3, 4, 5 ]

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

// rangeOfNumbers(0,5) => [1,2,3,4,5]
// rangeOfNumbers(0,4) => [1,2,3,4]
// rangeOfNumbers(0,3) => [1,2,3]
// rangeOfNumbers(0,2) => [1,2]
// rangeOfNumbers(0,1) => [1]
// rangeOfNumbers(0,0) => []

console.log(rangeOfNumbers(0, 5));
