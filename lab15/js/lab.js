// index.js - purpose and description here
// Lab 13: Loops
// Author: Your Name
// Yu Sheng <ysheng15@ucsc.edu>
// Date:
// 26 May 2024
// Constants

const URL = "https://api.nasa.gov/planetary/apod";

// create a button listener
$("#activate").click(function(){
  console.log("Click");
  // call ajax
  $.ajax(ajaxObj);
})

// setup ajax object
const ajaxObj = {
  url: URL,
  data: {
    api_key: "DEMO_KEY",
    count: 1
  },
  type: "GET",
  dataType: "json",
  success: ajaxSuccess,
  error: ajaxError
}

// create ajax success callback (named)
function ajaxSuccess(data) {
  console.log("Data:", data);
  // parse json
  const randomAPOD = data[0];
  const title = randomAPOD.title;
  const imageURL = randomAPOD.url;
  const description = randomAPOD.explanation;
  const date = randomAPOD.date;

  // put stuff in output div
  $("#output").html("<h3>" + title + "</h3>");
  $("#output").append("<img src='" + imageURL + "' />");
  $("#output").append("<p class='date'>" + date + "</p>");
  $("#output").append("<p class='description'>" + description + "</p>");
}

// create ajax error callback
function ajaxError(request, error){
  console.log("Oops:", error);
}