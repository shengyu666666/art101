// index.js - purpose and description here
// Lab 11: JavaScript Events and Forms
// Author: Your Name
// Yu Sheng <ysheng15@ucsc.edu>
// Date:
// 19 May 2024
// Constants

// Function to sort the characters of a string in alphabetical order.
function sortString(inputString) {
  return inputString.split('').sort().join('');
}

// Click listener for the button
$("#submit").click(function() {
  // Get values from input fields
  const userName = $("#userName").val();
  const userName2 = $("#userName2").val();
  const userName3 = $("#userName3").val();

  // Sort the input strings
  const userNameSorted = sortString(userName);
  const userName2Sorted = sortString(userName2);
  const userName3Sorted = sortString(userName3);

  // Append new sorted names to the output div
  // This ensures not to replace existing content, but rather add to it
  $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
  $("#output").append('<div class="text"><p>' + userName2Sorted + '</p></div>');
  $("#output").append('<div class="text"><p>' + userName3Sorted + '</p></div>');
});