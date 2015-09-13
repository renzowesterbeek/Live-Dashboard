function getSunsetSunrise(){
  $.get( "http://api.sunrise-sunset.org/json?lat=52.379189&lng=4.899431&formatted=0", function( data ) {
    var returnArray = [];
    var sunrise = new Date(data.results.sunrise);
    var sunset = new Date(data.results.sunset);
    $('#sunrise span').html(zerofix(sunrise.getHours()) + ":" + zerofix(sunrise.getMinutes()));
    $('#sunset span').html(zerofix(sunset.getHours()) + ":" + zerofix(sunset.getMinutes()));
  });
}

function returnDayName(date){
  var daynum = date.getDay();
  if(daynum === 0){
    return "Sunday";
  } else if (daynum == 1){
    return "Monday";
  } else if (daynum == 2){
    return "Tuesday";
  } else if (daynum == 3){
    return "Wednesday";
  } else if (daynum == 4){
    return "Thursday";
  } else if (daynum == 5){
    return "Friday";
  } else if (daynum == 6){
    return "Saturday";
  }
}

function returnTime(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return zerofix(hours) + ":" + zerofix(minutes);
}

function returnDate(){
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = new Date();
  var weekday = returnDayName(date);
  var day = date.getDate();
  var month = monthNames[date.getMonth()];

  return weekday + " " + day + " " + month;
}
