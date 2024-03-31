//Question 1 - Second largest number
//Given an array Arr of size N print second largest
//distinct element from an array

//Input: [12 , 35 , 1, 10, 34, 1] --------->>>>> Output: 34
//Input: [10, 5, 10] ---------->>>>>>>> Output: 5

//[12 , 35 , 1, 10, 34, 1 , 35] => [1,1,10,12,34,35,35]
//set -> No repeating elements inside of array

function secondLargest(arr) {
  const uniqueArr = new Set(arr);

  console.log(uniqueArr); // output->  Set(5) { 12, 35, 1, 10, 34 } - we have to convert this to an array
}

secondLargest([12, 35, 1, 10, 34, 1, 35]);

//Array.from -> when you have an object it convert into an array

function secondLargest1(arr) {
  const uniqueArr = Array.from(new Set(arr)); //O(n)

  uniqueArr.sort((a, b) => {
    //O(nlogn)
    return b - a;
  });

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}

console.log(secondLargest1([12, 35, 1, 10, 34, 1, 35]));

//Time complexity for above solution -> O(nlogn)

//Optimized approach

//Number.NEGATIVE_INFINITY -> least number that javascript can hold

// Optimised Approach
// [12, 35, 1, 10, 34, 1]
// secondLargest = 34
// largest = 35
function secondLargestOptimised(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(secondLargestOptimised([12, 35, 1, 10, 34, 1, 35]));
// Time Complexity -> O(n);
// Space Complexity -> O(1);
