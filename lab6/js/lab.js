// index.js - purpose and description here
// Lab 6: Arrays and Objects
// Author: Your Name
// Yu Sheng <ysheng15@ucsc.edu>
// Date:
// 27 April 2024
// Constants

// Functions

// Define Variables
myTransport = ["BMW 330i", "on foot"];

// create an object for my main ride
myMainRide = {
  make: "BMW",
  model: "330i",
  color: "white",
  year: 2023,
  age: function() {
     return 2024 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
