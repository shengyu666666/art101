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
  const userName = $("#user-name").val();
  const additionalInput1 = $("#additional-input1").val();
  const additionalInput2 = $("#additional-input2").val();

  // Sort the input strings
  const userNameSorted = sortString(userName);
  const input1Sorted = sortString(additionalInput1);
  const input2Sorted = sortString(additionalInput2);

  // Append new sorted names to the output div
  // This ensures not to replace existing content, but rather add to it
  $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
  $("#output").append('<div class="text"><p>' + input1Sorted + '</p></div>');
  $("#output").append('<div class="text"><p>' + input2Sorted + '</p></div>');
});