$(document).ready(function(){
  $('#clock h1').html(returnTime);
  $('#clock #date').html(returnDate);
  getSunsetSunrise();

  // 10 second interval
  setInterval(function(){
    $('#clock h1').html(returnTime);
    listMessages();
    getSunsetSunrise();
  }, 10000);

  // 1 second interval
  setInterval(function(){
    $('#clock #date').html(returnDate);
  }, 1000);
});
