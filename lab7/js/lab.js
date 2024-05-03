// index.js - purpose and description here
// Lab 7: Functions
// Author: Your Name
// Yu Sheng <ysheng15@ucsc.edu>
// Date:
// 2 May 2024
// Constants

// Functions

// sortUserName - a function that takes user input and sorts the letters of their name
function sortuserName() {
    var userName = window.prompt("Hello, Please tell me your name!");
    console.log("userName =", userName);

    // verify if the input is valid
    if (userName) {
        userName = userName.toLowerCase(); // Convert to lowercase to ignore case differences
        // split string to array
        var nameArray = userName.split('');
        console.log("nameArray =", nameArray);
        // sort the array 
        var namearraySort = nameArray.sort();
        console.log("namearraySort =", namearraySort);
        // join array back to a string
        var nameSorted = namearraySort.join('');
        console.log("nameSorted =", nameSorted);
        //   userName.toLower().split("").sort().join("")
        return nameSorted;
    } else {
        return "No name provided";
    }
}

// output
document.writeln("Oh, I've fixed your name: ", sortuserName(), "</br>");

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