var http = require('http');
var request = require('request');
var fs = require('fs');

var getDownloadlink = function(callback){
  var options = {
    url: 'https://api.github.com/repos/renzowesterbeek/drinkyowater/releases',
    headers: {
      'User-Agent': 'request',
    }
  }

  request(options, function (error, response, body) {
    if(error){
      console.log("ERROR OCCURED " + error);
      return 0;
    }
    if (!error && response.statusCode == 200) {
      var body = JSON.parse(body);
      callback(body.zipball_url);
      return 1;
    }
  });
}

setInterval(function(){
  console.log('Checking for updates...');
  // Check for package updates
  var currentFile = "";
  var remoteFile = "";

  fs.readFile('version.md', 'utf-8', function (err, data) {
    if (err) throw err;
    currentFile = data;
  });

  request('http://raw.githubusercontent.com/renzowesterbeek/Live-Dashboard/master/version.md', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      remoteFile = body;
      if(currentFile !== remoteFile){
        console.log('Update available');
        getDownloadlink(function(url){
          console.log(url);
          var file = fs.createWriteStream("file.zip");
          var request = http.get(url, function(response) {
            response.pipe(file);
          });
        });
      }
    }
  });
}, 2*1000); // Every 2 seconds
