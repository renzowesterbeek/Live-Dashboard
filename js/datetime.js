function returnDayName(date){
  var daynum = date.getDate();
  if(daynum === 0){
    return "Monday";
  } else if (daynum == 1){
    return "Tuesday";
  } else if (daynum == 2){
    return "Wednesday";
  } else if (daynum == 3){
    return "Thursday";
  } else if (daynum == 4){
    return "Friday";
  } else if (daynum == 5){
    return "Saturday";
  } else if (daynum == 6){
    return "Sunday";
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
