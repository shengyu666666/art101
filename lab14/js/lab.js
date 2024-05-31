// index.js - purpose and description here
// Lab 13: Loops
// Author: Your Name
// Yu Sheng <ysheng15@ucsc.edu>
// Date:
// 26 May 2024
// Constants

//DEBUG
function sortuserName() {
    var userName = window.prompt("Hello, Please enter your name here!");
    console.log("userName =", userName);

    if (userName) {
        userName = userName.toLowerCase();
        var nameArray = userName.split('');
        console.log("nameArray =", nameArray);
        var namearraySort = nameArray.sort();
        console.log("namearraySort =", namearraySort);
        var nameSorted = namearraySort.join('');
        console.log("nameSorted =", nameSorted);
        return nameSorted;
    } else {
        return "No name provided";
    }
}

document.writeln("Hi: ", sortuserName(), "</br>");