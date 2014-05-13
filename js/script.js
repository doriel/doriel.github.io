$(document).ready(function() {
  $("#btn_sobre").click(function(e) {
  	e.preventDefault();
    $("#sobre").fadeIn();
    $(this).hide();
  });
});