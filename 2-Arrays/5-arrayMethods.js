//More array methods

const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];
const arr = ["apple", "banana", "cherry"];

//concat

const newArr = nums.concat(nums2, arr);
console.log(newArr);

//slice

const newArr1 = arr.slice(0, 2);
console.log(newArr1);

//newArr1 = [ 'apple', 'banana' ]

const newArr2 = arr.slice(-2);
console.log(newArr2);

//newArr2 = [ 'banana', 'cherry' ]

//splice

arr.splice(1, 2, "orange");
console.log(arr);

//arr = [ 'apple', 'orange' ]

//fill
const dummy = [2, 5, 1, 6];
dummy.fill(8, 1);
console.log(dummy);
//[2, 8, 8, 8];

const dummy1 = [2, 5, 1, 6];
dummy1.fill(0);
console.log(dummy1);
//[0, 0, 0, 0];

//flat

const flatEx = [1, [2, 3], [[4, 5], 6]];

const flattenedArray = flatEx.flat();
console.log(flattenedArray);

//[ 1, 2, 3, [ 4, 5 ], 6 ] -> flatten the array upto one level

const flattenedArray1 = flatEx.flat(2);
console.log(flattenedArray1);

//[ 1, 2, 3, 4, 5, 6 ]

//reverse

console.log(nums);
nums.reverse();
console.log(nums);

//sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => a - b);
console.log(unsorted);

//[ 1, 2, 3, 5, 7, 10 ]

const unsorted1 = [5, 2, 10, 7, 3, 1];
unsorted1.sort((a, b) => b - a);
console.log(unsorted1);

//[ 10, 7, 5, 3, 2, 1 ]
