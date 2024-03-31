let person = {
  name: "Piyush",
  age: 25,
};

let arr = ["apple", "banana", "cherry", person];

console.log(arr[3]);
console.log(arr[3].name);
console.log(arr.length);

//Arrays -Add and Remove Elements

//End of the array
arr.push("Orange");
console.log(arr);

arr.pop();
arr.pop();
console.log(arr);

//Add to top of the array
arr.unshift("orange");
console.log(arr);

//Remove top of the array
arr.shift();
console.log(arr);

//*IMPORTANT
//pop and push are more performant than shift and unshift
