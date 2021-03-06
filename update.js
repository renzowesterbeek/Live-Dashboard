// update.js
// Checks whether update is available or not. If true, downloads latest repo from GitHub.
// Created by Renzo Westerbeek

var fs = require('fs');
var http = require('http');
var request = require('request');
var exec = require('child_process').exec;

var currentversion;
var remoteversion;

function downloadRepo(){
  exec('mkdir update && cd update && git clone https://github.com/renzowesterbeek/Live-Dashboard', function (error, stdout, stderr) {
    if(error){
      console.log('exec error: ' + error);
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
    } else {
      exec('cp update/Live-Dashboard/package.json package.json && cp -r update/Live-Dashboard/dist/ dist/ && rm -rf update', function (error, stdout, stderr){
        if(error){
          console.log('exec error: ' + error);
          console.log('stdout: ' + stdout);
          console.log('stderr: ' + stderr);
        } else {
          console.log("Update succesfully");
        }
      });
    }
  });
}

setInterval(function(){
  console.log('polling...');
  fs.readFile('package.json', 'utf8', function (err, data) {
    if(!err){
      currentversion = JSON.parse(data).version; // get local version
    } else {
      console.log(err);;
    }

    request('https://raw.githubusercontent.com/renzowesterbeek/Live-Dashboard/master/package.json', function(error, response, body) {
      if(!error && response.statusCode == 200){
        remoteversion = JSON.parse(body).version; // get remote version
        //remoteversion = "DEV";
        if(currentversion !== remoteversion){
          console.log("New update found: " + remoteversion);
          downloadRepo();
        }
      } else {
        console.log("Status code: " + response.statusCode);
        console.log(error);;
      }
    });
  });
}, 5 * 1000); // INCREASE THIS
