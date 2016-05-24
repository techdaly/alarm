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
    $("#user-alarms").append("<li><h4>" + newAlarm.label + "</h4><h3>" + newAlarm.hour + ":" + newAlarm.minute + " " + newAlarm.ampm + "</h3><br></li>");

    //Clear spaces
    $("input#alarm-label").val("");
    $("select#alarm-hour").val("1");
    $("select#alarm-minute").val("00");
    $("input.alarm-am-pm").prop("checked", false);

      //Alarm go whee
      setInterval(function(){
        if (moment().format("h:mm a") === moment().format("4:05 pm")){
          alert("Alarm!");
        }
      }, 1000);
 

  });
});
