$(document).ready(function(){
  // Initial load
  $('#clock h1').html(returnTime);
  $('#clock #date').html(returnDate);
  getSunsetSunrise();

  // Long interval
  setInterval(function(){
    console.log('polling long interval...');
    $('#clock h1').html(returnTime);
    listMessages();
    getSunsetSunrise();
    $('#calendar ul').html("");
    $('#rooster ul').html("");
    listUpcomingEvents();
    listMessages();
  }, 5*60*1000);

  // Short interval
  setInterval(function(){
    console.log('polling short interval...');
    $('#clock #date').html(returnDate);
  }, 20*1000);
});
