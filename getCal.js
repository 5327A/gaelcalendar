var jsonfile = require('jsonfile');
var PublicGoogleCalendar = require('public-google-calendar')
        , p = new PublicGoogleCalendar({ calendarId: '0t72do02u19ab4qp80garuhgj4@group.calendar.google.com' })
        , a = new PublicGoogleCalendar({ calendarId: 'h8rfru07t6h395591sdlujb3v4@group.calendar.google.com' })
        , b = new PublicGoogleCalendar({ calendarId: '5s89dmbo2frllsj96d2gqakjts@group.calendar.google.com' })
        , c = new PublicGoogleCalendar({ calendarId: '9p5tkbsl2687gd265uo7s70jdo@group.calendar.google.com' })
        , d = new PublicGoogleCalendar({ calendarId: 'team5327d@gmail.com' });
p.getEvents(function(err, events) {
  if (err) { return console.log(err.message); }
  jsonfile.writeFile('p.json', events, {spaces:4}, function (err) {
        if (err) { console.error(err); }
  });
});
a.getEvents(function(err, events) {
  if (err) { return console.log(err.message); }
  jsonfile.writeFile('a.json', events, {spaces:4}, function (err) {
        if (err) { console.error(err); }
  });
});
b.getEvents(function(err, events) {
  if (err) { return console.log(err.message); }
  jsonfile.writeFile('b.json', events, {spaces:4}, function (err) {
        if (err) { console.error(err); }
  });
});
c.getEvents(function(err, events) {
  if (err) { return console.log(err.message); }
  jsonfile.writeFile('c.json', events, {spaces:4}, function (err) {
        if (err) { console.error(err); }
  });
});
d.getEvents(function(err, events) {
  if (err) { return console.log(err.message); }
  jsonfile.writeFile('d.json', events, {spaces:4}, function (err) {
        if (err) { console.error(err); }
  });
});