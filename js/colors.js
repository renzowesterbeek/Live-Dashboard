function colors(){
  $.get( "http://api.sunrise-sunset.org/json?lat=52.379189&lng=4.899431&formatted=0", function( data ) {
    var sunriseTime = new Date(data.results.sunrise).getTime();
    var sunsetTime = new Date(data.results.sunset).getTime();

    var curTime = new Date().getTime();

    if(curTime < sunsetTime && curTime > sunriseTime){
      // Day
      $("body").css("background-color","#3498DB");
    } else {
      // Night
      $("body").css("background-color","#34495D");
      $("body").css("color","#ECF0F1");
    }

  });

}
