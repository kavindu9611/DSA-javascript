const funnyNumber = (array) => {
  // 4 operations
  for (let i = 0; i < array.length; i++) {
    if (i === 3) return array[i];
  }
};

const nums = [420, 96, 12, 69, 77];

console.time("funnyNumber");
console.log(funnyNumber(nums));
console.timeEnd("funnyNumber");

//o(n) <- Time complexity
//o(1) <- space complexity
