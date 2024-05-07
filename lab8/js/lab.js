// index.js - purpose and description here
// Lab 8: Anon Functions and Callbacks
// Author: Your Name
// Yu Sheng <ysheng15@ucsc.edu>
// Date:
// 6 May 2024
// Constants

// Functions

function square(x) {
  return (x * x);
}

// test function
console.log("What is square 1? ", square(1));
console.log("What is square 2? ", square(2));

array = [3, 4, 5, 6, 7, 8, 9]
console.log("My array", array);

var result = array.map(square);
// should return [9, 16, 25, 36, 49, 64, 81]
console.log("Test of square of array:", result);

var result = array.map(function(x){
  return x + 5;
})
// should return [8, 9, 10, 11, 12, 13, 14]
console.log("x + 5 of array:", result);