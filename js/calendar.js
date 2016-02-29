function listUpcomingEvents() {
  var tomorrow = new Date();
  tomorrow = tomorrow.setDate(tomorrow.getDate() + 1);

  // Load personal 'next 24 hour' calendar
  var request = gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': new Date().toISOString(),
    'timeMax': new Date(tomorrow).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'orderBy': 'startTime'
  });

  request.execute(function(resp) {
    var events = resp.items;
    var personalEvents = [];

    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        // console.log(events[i]);
        var now = new Date();
        var startRaw = new Date(events[i].start.dateTime);
        var endRaw = new Date(events[i].end.dateTime);
        var summary = events[i].summary;
        if(startRaw == 'Invalid Date'){
          // All day event
          personalEvents.push("All day | " + summary);
        } else {
          // Everything else
          var start = zerofix(startRaw.getHours()) + ":" + zerofix(startRaw.getMinutes());
          var end = zerofix(endRaw.getHours()) + ":" + zerofix(endRaw.getMinutes());
          personalEvents.push(start + " - " + end + " " + summary);
        }
      }
    } else {
      personalEvents.push('Geen afspraken gevonden.');
    }

    fillList($('#personal ul'), personalEvents);

  });

  // Load school agenda
  var timeMin = new Date();
  var timeMax = new Date();
  if(returnTime() > "15:00"){
    // Load events for tomorrow
    timeMin.setDate(timeMin.getDate() + 1);
    timeMax.setDate(timeMax.getDate() + 1);
  }

  timeMin.setHours(8);
  timeMin.setMinutes(0);
  timeMax.setHours(18);
  timeMax.setMinutes(0);

  var school = gapi.client.calendar.events.list({
    'calendarId': '5h6fbbljm98089k740jlvtdg70@group.calendar.google.com',
    'timeMin': timeMin.toISOString(),
    'timeMax': timeMax.toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 9,
    'orderBy': 'startTime'
  });

  school.execute(function(resp) {
    var events = resp.items;
    var schoolEvents = [];

    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        // console.log(events[i]);
        var now = new Date();
        var startRaw = new Date(events[i].start.dateTime);
        var endRaw = new Date(events[i].end.dateTime);
        var summary = events[i].summary;
        var start = zerofix(startRaw.getHours()) + ":" + zerofix(startRaw.getMinutes());
        var end = zerofix(endRaw.getHours()) + ":" + zerofix(endRaw.getMinutes());
        schoolEvents.push("<span class='time'>" + start + " - " + end + "</span> " + summary);
      }
    } else {
      schoolEvents.push('Geen lessen gevonden.');
    }

    fillList($('#rooster ul'), schoolEvents);

  });
}

function fillList(id, array){
  id.html('');
  for(var i = 0; i < array.length; i++){
    id.append('<li>' + array[i] + '</li>');
  }
}
