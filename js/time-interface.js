$(document).ready(function(){
  $('#time').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

  setInterval(function(){
    $('#time').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);
});
