// index.js - purpose and description here
// Lab 9: Libraries & jQuery
// Author: Your Name
// Yu Sheng <ysheng15@ucsc.edu>
// Date:
// 12 May 2024
// Constants

// add button to Challenge section

$("#challenge").append("<button id='button-challenge'>Challenge</button>");

// add button to Problems section

$("#problems").append("<button id='button-problems'>Problems</button>");

// add button to Reflection section

$("#reflection").append("<button id='button-reflection'>Reflection</button>");

// add button to Results section

$("#results").append("<button id='button-results'>Results</button>");

// add a click listener to the challenge button
$(document).ready(function() {
    $("#button-challenge").click(function() {
        // now add (or subtract) the "q" class to the section
        $("#challenge").toggleClass("q");
    });
});

$(document).ready(function() {
  $("#button-problems").click(function() {
      // now add (or subtract) the "w" class to the section
      $("#problems").toggleClass("w");
  });
});

$(document).ready(function() {
  $("#button-reflection").click(function() {
      // now add (or subtract) the "e" class to the section
      $("#reflection").toggleClass("e");
  });
});

$(document).ready(function() {
  $("#button-results").click(function() {
      // now add (or subtract) the "r" class to the section
      $("#results").toggleClass("r");
  });
});