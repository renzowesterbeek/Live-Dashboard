$(document).ready(function(){
  $('#clock h1').html(returnTime);
  $('#clock #date').html(returnDate);

  setInterval(function(){
    $('#clock h1').html(returnTime);
    $('#clock #date').html(returnDate);
  }, 10000);
});
