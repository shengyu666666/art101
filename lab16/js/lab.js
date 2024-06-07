// index.js - purpose and description here
// Lab 16: JSON and APIs
// Author: Your Name
// Yu Sheng <ysheng15@ucsc.edu>
// Date:
// 6 June 2024
// Constants

var URL = "https://xkcd.com/info.0.json";

// https://xkcd.com/json.html
// endpoint https://xkcd.com/456/info.0.json
var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

// Endpoint format: http://xkcd.com/614/info.0.json

function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);

  $.ajax({
      url: ourURL,
      type: "GET",
      dataType: "json",
      success: function(data) {
        var imageUrl = data.img;
        var title = make_safe(data.title);
        var alt = make_safe(data.alt);
        var comicNum = data.num;
        var html = `<div id="imageblock">
            <h2>${title}</h2>
            < img src="${imageUrl}" title="${alt}"><br>
            <button id="prev">Previous</button><button id="next">Next</button>
          </div>`;
        $("#output").html(html);

        $("#prev").click(function(){
          getComic(comicNum - 1);
        });

        $("#next").click(function(){
          getComic(comicNum + 1);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Please ignore this error.");
        console.log("Have a nice day! :)");
      }
  });
}

getComic();