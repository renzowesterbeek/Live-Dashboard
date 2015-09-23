function getGreeting(){
  var time = returnTime();
  if(time >= "06:00" && time < "12:00"){
    return 'Goede morgen';
  } else if(time >= "12:00" && time < "18:00"){
    return 'Goede middag';
  } else if(time >= "18.00" && time < "24:00"){
    return 'Goede avond';
  } else if(time >= "24.00" && time < "06:00"){
    return 'Goede nacht';
  } else {
    return "Goede dag";
  }
}
