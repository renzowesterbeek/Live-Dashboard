function returnTime(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return hours + ":" + minutes;
}

function returnDate(){
  var date = new Date();
  var day = date.getDay();
  return day;
}
