//Defining my Variables//

var DescriptionBox =$("input");

//showing current date and time//

var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentTime);


//Timeblocks for standard buisness hours//


//Get Data from local storage//

$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        localStorage.setItem($(this).prop("id"), $(this).prev().val());
        console.log(localStorage.getItem($(this).prop("id")));
    })
});



$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));


//usse values from time and saves to local storage

DescriptionBox.each(function (Color) {
    // "color" is 0, if "0" and counting + 9 is less than current hour, then create class PAST...
    if (CurrentHR > Color + 9) {
      // Find the 'past' class and colour GREY - CSS
      $(this).addClass("past");
    }
  
    // If the current hour is equals to hours counting it is PRESENT...
    if (CurrentHR == Color + 9) {
      // Find the 'present' class and colour RED - CSS
      $(this).addClass("present");
    }
  
    // If counting number + 9 is larger than current hour, then create class FUTURE...
    if (CurrentHR < Color + 9) {
      // Find the 'future' class and colour GREEN - CSS
      $(this).addClass("future");
    }
  });
 
  