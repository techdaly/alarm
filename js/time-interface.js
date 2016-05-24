$(document).ready(function(){
  setInterval(function(){
    $('#time').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);
});
