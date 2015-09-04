// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '756478392094-cv1km3slb7h1hdejlnap2iplj55okutb.apps.googleusercontent.com';
var SCOPES = ["https://www.googleapis.com/auth/calendar"];

function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES,
      'immediate': true
    }, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none';
    loadCalendarApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    authorizeDiv.style.display = 'inline';
  }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult);
  return false;
}

function loadCalendarApi() {
  gapi.client.load('calendar', 'v3', listUpcomingEvents);
}

function listUpcomingEvents() {
  var tomorrow = new Date();
  tomorrow = tomorrow.setDate(tomorrow.getDate() + 1);

  var request = gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': new Date().toISOString(),
    'timeMax': new Date(tomorrow).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  });

  request.execute(function(resp) {
    var events = resp.items;

    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        // console.log(events[i]);
        var now = new Date();
        var startRaw = new Date(events[i].start.dateTime);
        var endRaw = new Date(events[i].end.dateTime);
        var summary = events[i].summary;
        var start = zerofix(startRaw.getHours()) + ":" + zerofix(startRaw.getMinutes());
        var end = zerofix(endRaw.getHours()) + ":" + zerofix(endRaw.getMinutes());
        appendList(start + " | " + end + " " + summary);
      }
    } else {
      appendList('No upcoming events found.');
    }

  });

  var school = gapi.client.calendar.events.list({
    'calendarId': '5h6fbbljm98089k740jlvtdg70@group.calendar.google.com',
    'timeMin': new Date().toISOString(),
    'timeMax': new Date(tomorrow).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 9,
    'orderBy': 'startTime'
  });

  school.execute(function(resp) {
    var events = resp.items;

    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        // console.log(events[i]);
        var now = new Date();
        var startRaw = new Date(events[i].start.dateTime);
        var endRaw = new Date(events[i].end.dateTime);
        var summary = events[i].summary;
        var start = zerofix(startRaw.getHours()) + ":" + zerofix(startRaw.getMinutes());
        var end = zerofix(endRaw.getHours()) + ":" + zerofix(endRaw.getMinutes());
        appendRooster(start + " | " + end + " " + summary);
      }
    } else {
      appendRooster('No upcoming events found.');
    }

  });
}

function appendList(message) {
  $('#calendar ul').append("<li>" + message + "</li>");
}

function appendRooster(message) {
  $('#rooster ul').append("<li>" + message + "</li>");
}
