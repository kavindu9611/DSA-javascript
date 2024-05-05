// Strings in Javascript

// Creating Strings
const string = new String("Subscribe to me kavindu!");

// using double quotes
const doubleQuote = "Subscribe to me kavindu!";

// using single quotes
const singleQuote = "kavindu!";

// using backticks
const backticks = `
Subscribe to me kavindu! 
Like this Video
Share this video
`;

// Template Literals
const templateLiteral = `Subscribe to ${singleQuote}!`;

console.log(templateLiteral);
//Output: Subscribe to kavindu!!

// Tagged Literals
console.log`hello ${"world"} how are ${"you"}`;
//Output: [ 'hello ', ' how are ', '' ] world you

// Tagged Literals Example function
function test(string, youtubeChannel, person) {
  console.log(string, youtubeChannel, person);
  return;
}

const channel = "CodewithMe";
const name = "Kavindu";
test`Subscribe to ${channel} run by ${name}`;
//Output: [ 'Subscribe to ', ' run by ', '' ] CodewithMe Kavindu

const str2 = "Subscribe to CodewithMe";
console.log(str2[3]);
console.log(str2.charAt(3));
//Output = s

// Looping
for (let i = 0; i < str2.length; i++) {
  console.log(str2[i]);
}

// Modifying Strings
str2[3] = "b"; // can't do this
console.log(str2.replace("s", "b")); // replaces first instance of that character or word   Output:Subbcribe to CodewithMe
console.log(str2.replaceAll("e", "c")); // replaces all instance of that character or word  Output: Subscribc to CodcwithMc

const newStr = str2.concat(" and share this video"); // joins 2 strings
console.log(newStr);
//Subscribe to CodewithMe and share this video

const newStr2 = "    Hello        World    ";
console.log(newStr2.trim()); // removes spaces from beginning and end
//Hello        World

// Searching
console.log(str2.indexOf("Code")); // index of a character or word's first appearance
//Output: 13

console.log(str2.lastIndexOf("e")); // index of a character or word's last appearance
//Output: 22

console.log(str2.indexOf("e")); // index of first appearance of "e"
//Output:8

console.log(str2.startsWith("S"));
//Output:true
console.log(str2.endsWith("e"));
//Output:true

// Extracting Substrings
console.log(str2.substring(13, 23));
//CodewithMe

console.log(str2.slice(-14, -1));
// to CodewithM

// Converting Case
const toBeConverted = { name: "Piyush" };
console.log(String(toBeConverted));
//Output: [object Object]
console.log(JSON.stringify(toBeConverted));
//Output: '{"name":"Piyush"}'

console.log(str2.toUpperCase()); // converts to uppercase
console.log(str2.toLowerCase()); // converts to lowercase

console.log(str2.charCodeAt(0)); // returns ASCII Code
//83

console.log(String.fromCharCode(65)); // returns character from ASCII Code
//A

// String Comparison
const str4 = "apple";
const str5 = "apple";

console.log(str4.localeCompare(str5)); // compare strings
//Output:0 - both of the strings are equal

console.log(str2.includes("Subscribe")); // checks if a word exists inside a string
//Output: true

// Splitting and Joining Strings
console.log(str2.split("e"));
//Output: [ 'Subscrib', ' to Cod', 'withM', '' ]
const arr = ["apple", "banana"];
console.log(arr.join(" and "));
//apple and banana
