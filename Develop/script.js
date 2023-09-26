// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){
  
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 
  //HINT: What does `this` reference in the click listener function? 
  //* This references the id of the button that was clicked
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
  //* DOM traversal is used with siblings to get the id of the time-block containing the button that was clicked
  // How might the id be useful when saving the description in local storage?
  //* it is used to describe the id of the time-block containing the button that was clicked

  $('.saveBtn').click(function() {
    var id = $(this).parent().attr('id');
    var description = $(this).siblings('.description').val();
    localStorage.setItem(id,JSON.stringify(description));
  });
  
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?
  // How can Day.js be used to get the current hour in 24-hour time?
  
  var now = dayjs()
  var hour = $('id')
  // Add .split() to get an array of all the time-blocks in the page.

  $("time-block").each(function() {
    var hour = $(this).attr('id').split("-")[5];
  });

  if (hour === now) {
    $("description").addClass("present");
  }
  
  else if (hour < now) {
    $("description").removeClass("present");
    $("description").addClass("past");

    } else (hour > now); {
      $("description").removeClass("present");
      $("description").addClass("future");
    }


  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  //HINT: How can the id attribute of each time-block be used to do this?
  
    // var description = JSON.parse(localStorage.getItem(description));
    // $(".description").val(description);
  // get selector for each hour and then get value from local storage.

  $("#hour-09 .description").val(localStorage.getItem("hour-09"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // TODO: Add code to display the current date in the header of the page.

  
    var currentDate = dayjs();
    $('#currentDate').text(currentDate.format('dddd, MMMM D'));
  
});