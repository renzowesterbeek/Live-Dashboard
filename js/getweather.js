function getWeather(){
  var apikey = '1de282568ab8ce4839a60801d121cbea';
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=London&type=like&mode=xml&units=metric&appid=' + apikey,
    type: 'GET',
    crossDomain: true,
    dataType: 'XML',
    success: success
  });

  function success(result){
    console.log(result.getElementsByTagName('precipitation')[0].outerHTML);
    var xmlDoc = $.parseXML(result);
    var $xml = $(xmlDoc);
    console.log($xml);
  }
}
