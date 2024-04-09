function Kavindu() {
  return Priya();
}

function Priya() {
  return Angelo();
}

function Angelo() {
  return Sachin();
}

function Sachin() {
  return nipuni();
}

function nipuni() {
  // base case
  return true;
}

console.log(Kavindu());

//Recursive function

function recursiveFunc() {
  console.log("called");
  recursiveFunc();
}

//recursiveFunc();

//endless loop- because of that we need a base case

function goToLunch(person) {
  if (person === 5) return true; //base case
  console.log(person);
  return goToLunch(person + 1);
}

console.log("outcome:", goToLunch(1));

// Loops vs Recursion

function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(multiply([1, 2, 3, 4]));

//Converting above functon to  recursive function

function multiply1(arr) {
  console.log(arr);
  if (arr.length <= 0) {
    return 1;
  } else return arr[arr.length - 1] * multiply1(arr.slice(0, arr.length - 1));
}

console.log(multiply1([1, 2, 3, 4]));
