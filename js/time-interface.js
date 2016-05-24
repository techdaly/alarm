//call the Alarm constructor from the backend files
var Alarm = require('./time-logic.js').Alarm;


$(document).ready(function(){
  //Shows current time immediately
  $('#time').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

  //Counts time up every second
  setInterval(function(){
    $('#time').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);

  //Form Submission
  $("form#set-alarm").submit(function(event){
    event.preventDefault();

    //Event Listeners
    var alarmLabel = $("input#alarm-label").val();
    var alarmHour = $("select#alarm-hour").val();
    var alarmMinute = $("select#alarm-minute").val();
    var alarmAmPm = $("input.alarm-am-pm").filter(":checked").val();

    //Create new Alarm object
    var newAlarm = new Alarm(alarmLabel, alarmHour, alarmMinute, alarmAmPm);

    console.log(newAlarm);

    //Show alarms to user
    $("#user-alarms").append("<li><h4>" + newAlarm.label + "</h4><h3>" + newAlarm.hour + ":" + newAlarm.minute + " " + newAlarm.a + "</h3><br></li>");

    //Clear spaces
    $("input#alarm-label").val("");
    $("select#alarm-hour").val("1");
    $("select#alarm-minute").val("00");
    $("input.alarm-am-pm").prop("checked", false);

      //Alarm go whee
      //1. put moment and newAlarm object into comparable terms
      var now = moment();
      var alarm = moment({hour: newAlarm.hour, minute: newAlarm.minute, a: newAlarm.a});
      //2. compare moment and newAlarm using if statements? for loops? moment built in stuff?
      //3. make comparison run over and over again until moment equals newAlarm?






  });
});
