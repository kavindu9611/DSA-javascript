// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

//[1,2,3,4,5,6,7] => [7,1,2,3,4,5,6] => [6,7,1,2,3,4,5] => [5,6,7,1,2,3,4]

function rotateArray(nums, k) {
  let size = nums.length;

  if (k > size) {
    k = k % size;
  }

  const rotated = nums.splice(size - k, size); //[5 , 6, 7] // O(n)
  nums.unshift(...rotated); // O(n)

  return nums;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

//Time complexity - O(n)

//Without inbuilt javascript funtions
//Optimised approach

function rotateArrayOptimised(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }
  //[1, 2, 3, 4, 5, 6, 7] => [7,6,5,4,3,2,1] => [5,6,7,4,3,2,1] => [5,6,7,1,2,3,4]

  reverse(nums, 0, nums.length - 1); // O(n)
  reverse(nums, 0, k - 1); // O(k)
  reverse(nums, k, nums.length - 1); // O(n-k)

  return nums;
}

// Time Complexity -> O(n) we do not consider constants while calculating time complexities (O(k),  O(n-k))
// Space Complexity -> O(1)

//[1,2,3,4]
//left-0
//right-3
//temp - 1

//[4,2,3,1]
//left - 1
//right - 2
//temp - 2

//[4,3,2,1]
//left - 2
//right-1

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(rotateArrayOptimised([1, 2, 3, 4, 5, 6, 7], 2));
