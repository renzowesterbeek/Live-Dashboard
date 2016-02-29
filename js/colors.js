function colors(){
  $.get( "http://api.sunrise-sunset.org/json?lat=52.379189&lng=4.899431&formatted=0", function( data ) {
    var sunrise = new Date(data.results.sunrise);
    var sunset = new Date(data.results.sunset);
  });

  var curTime = new Date();


  if(curTime < sunset && curTime > sunrise){
    // Day
    $("body").css("background-color","#3498DB");
  } else {
    // Night
    $("body").css("background-color","#34495D");
    $("body").css("color","#ECF0F1");
  }

}
