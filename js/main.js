$(document).ready(function(){
  $('#clock h1').html(returnTime);
  $('#clock #date').html(returnDate);
  getSunsetSunrise();

  setInterval(function(){
    $('#clock h1').html(returnTime);
  }, 10000);

  setInterval(function(){
    $('#clock #date').html(returnDate);
    getSunsetSunrise();
  }, 1000);
});
