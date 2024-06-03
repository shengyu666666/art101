// index.js - purpose and description here
// Lab 13: Loops
// Author: Your Name
// Yu Sheng <ysheng15@ucsc.edu>
// Date:
// 26 May 2024
// Constants

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://yesno.wtf/api",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            answer: "yes",  
            forced: false,
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        $("body").append("<p>Answer: " + data.answer + "</p>");
        $("body").append("<img src='" + data.image + "' alt='answer image'>");
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})