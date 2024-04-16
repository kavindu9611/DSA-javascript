// Ques 5 - Reverse a String
// Input: "hello"  ----->>>>>  Output: "olleh"

function reverseString(str) {
  if (str === "") {
    return "";
  } else return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));

//reverseString("hello") => reverseString("ello") + h
//reverseString("ello") => reverseString("llo") + e
//reverseString("llo") => reverseString("lo") + l
//reverseString("lo") => reverseString("o") + l
//reverseString("o") => reverseString("") + o
//reverseString("") => ""
