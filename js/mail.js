
function listMessages() {
  var resultArray = [];
  var callback = function(resp){
    var tempArray = [];

    var date = resp.internalDate;
    var snippet = resp.snippet;
    var headers = resp.payload.headers;
    var subject = "";

    for(var i = 0; i < headers.length; i++){
      if(headers[i].name == "Subject"){
        subject = headers[i].value;
        tempArray.push(date, subject, snippet);
      }
    }
    resultArray.push(tempArray);

    // When everything is loaded...
    if(resultArray.length == 8){
      $("#email ul").html("");
      // Sort array by time received
      var newArray = resultArray.sort(function(a,b){return a[0] < b[0];});
      for(var item = 0; item < newArray.length; item++){
        $("#email ul").append("<li><h1>"+newArray[item][1]+"</h1><span>"+newArray[item][2]+"</span></li>");
      }
    }
  };

  var getPageOfMessages = function(request, result) {
    request.execute(function(resp) {
      result = result.concat(resp.messages);
      for(var i = 0; i < result.length; i++){
        var messageId = result[i].id;
        getMessage(messageId, callback);
      }
    });
  };
  var initialRequest = gapi.client.gmail.users.messages.list({
    'userId': 'me',
    'labelIds' : 'INBOX'
  });
  getPageOfMessages(initialRequest, []);
}

// Receives single message
function getMessage(messageId, callback) {
  var request = gapi.client.gmail.users.messages.get({
    'userId': 'me',
    'id': messageId
  });
  request.execute(function(resp){
    callback(resp);
  });
}
