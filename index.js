
var greg = false;
function hexClock() {
  
  // Get the current time
  var today = new Date();
  var currentSec = today.getSeconds();
  var currentMin = today.getMinutes();
  var currentHour = today.getHours();
  
  // if the hour/min/sec is less than 10, add 0 at begining.
 if(currentHour <= 9){
  currentHour = '0'+ currentHour;
}
if(currentMin <= 9){
  currentMin = '0'+ currentMin;
}
if(currentSec <= 9){
  currentSec = '0'+ currentSec;
}


//make RGB variables
var hexHour = Math.round((255/23) * currentHour);
var hexMin = Math.round((255/59) * currentMin);
var hexSec = Math.round((255/59) * currentSec);
 
// Variables to call the Time
  
  var clock = currentHour+":"+currentMin+":"+currentSec;
  var rgb = "RGB("+hexHour+","+hexMin+","+hexSec+")";
  var hex = "#" +hexHour.toString(16)+hexMin.toString(16)+hexSec.toString(16);
  

//Output the Time
if(greg){
  $("#clock").text(hex);
  

}else{
  $("#clock").text(clock);
    


}

$("#clicks span").on("click",function(){
  if($(this).text() == 'HEX'){
    greg = true;
    $("#click2").css("font-weight", "bold");
    $("#click1").css("font-weight", "");
    
} else {
    greg = false;
    $("#click1").css("font-weight", "bold");
    $("#click2").css("font-weight", "");
   
}
  hexClock();
});

// Make the body bakground-color equal to the hex value of current time.
  var color = "#" +currentHour+currentMin+currentSec;
  document.body.style.background = color;
}

// Call the function after every second. 
setInterval(hexClock, 1000);



/*
  This function takes in two parameters: a number, and a string.
  The number represents the amount of hours/minutes/seconds.
  The string represents the unit, and is one of
    * "hour"
    * "minute"
    * "second"

  It returns a whole number value from 0-255 representing the
  relative CSS RGB value of that time period.

  It's pre-written for you. Best to not muck around with it.

var convertTimeframe = function(amount, unit) {

  switch (unit) {
    case "hour":
    case "hours":
      return Math.round((amount / 23) * 255)
    case "minute":
    case "minutes":
    case "second":
    case "seconds":
      return Math.round((amount / 59) * 255)
    default:
      return 0;
  }
}*/
