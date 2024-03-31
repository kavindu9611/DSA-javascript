//Spread and Rest operators

const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

//spread

const finalNums = [...nums, ...nums2];
console.log(finalNums);

//rest

function sum(...numbers) {
  return numbers;
}

console.log(sum(nums, nums2, 5, "hello"));

//the spread operator is used to spread elements of an array, while the rest operator is used to gather elements into an array.
