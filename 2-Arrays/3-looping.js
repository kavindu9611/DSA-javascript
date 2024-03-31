//Looping an array

let arr = ["apple", "banana", "cherry"];

//For loop

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//While loop

let i = 0;
while (i < arr.length) {
  console.log(arr[i]);

  i++;
}

//Inbuilt loops

const numbers = [1, 2, 3, 4, 5];

//map

numbers.map((item, index, array) => {
  console.log(item, index, array);
});

const num1 = numbers.map((item, index, array) => {
  return item + 5;
});

console.log(num1);

//filter

const num2 = numbers.filter((item, index, array) => {
  return item > 3;
});

console.log(num2);

//reduce

const sum = numbers.reduce((prev, item, index, array) => {
  return prev + item;
}, 2);

console.log(sum);

//some

//some is quite similar to filter
//but,it is return either true or false

const res = numbers.some((item, index, array) => {
  return item > 3;
});

console.log(res);

//every

//check for every single element
//if every single element is more than 3
//then it will return true

const res1 = numbers.every((item, index, array) => {
  return item < 10;
});

console.log(res1);

//find

//first element that satisfy the condition
//return 4 for res2

const res2 = numbers.find((item, index, array) => {
  return item > 3;
});

console.log(res2);

//findIndex
const index = nums.findIndex((item) => item === 2);
console.log(index);
