$(document).ready(function(){
  // Initial load
  $('#clock h1').html(returnTime);
  $('#clock #date').html(returnDate);
  getSunsetSunrise();
  $('#greeting').html(getGreeting() + ", Renzo");

  // Long interval
  setInterval(function(){
    console.log('polling long interval...');
    listMessages();
    getSunsetSunrise();
    $('#calendar ul').html("");
    $('#rooster ul').html("");
    listUpcomingEvents();
    listMessages();
    $('#greeting').html(getGreeting() + ", Renzo");
  }, 5*60*1000);

  // Short interval
  setInterval(function(){
    console.log('polling short interval...');
    $('#clock h1').html(returnTime);
    $('#clock #date').html(returnDate);
  }, 20*1000);
});
