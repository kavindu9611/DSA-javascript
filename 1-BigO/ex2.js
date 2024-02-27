const funnyNumber = (array) => {
  // 1 operation
  return array[3];
};

const nums = [420, 96, 12, 69, 77];

console.time("funnyNumber");
console.log(funnyNumber(nums));
console.timeEnd("funnyNumber");

//O(1) <- Time complexity
//O(1) <- Space complexity
