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
    return "zondag";
  } else if (daynum == 1){
    return "maandag";
  } else if (daynum == 2){
    return "dinsdag";
  } else if (daynum == 3){
    return "woensdag";
  } else if (daynum == 4){
    return "donderdag";
  } else if (daynum == 5){
    return "vrijdag";
  } else if (daynum == 6){
    return "zaterdag";
  }
}

function returnTime(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return zerofix(hours) + ":" + zerofix(minutes);
}

function returnDate(){
  var monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
  var date = new Date();
  var weekday = returnDayName(date);
  var day = date.getDate();
  var month = monthNames[date.getMonth()];

  return weekday + " " + day + " " + month;
}
