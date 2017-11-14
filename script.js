$(document).ready(function() {
var width;
var height;
var div;

$(".container div").on("click", function() {
  if($(this).attr("value") !== "1"){
  $(".container div").attr("value", "0");
  width = $(this).width();
  height = $(this).height();
  div = this;
  $(this).animate({width:"100%",height:"100%"}, 250);
  setTimeout(function(){$("p").css("display","inline-block");}, 200);
  $(this).css("border-radius", "10px");
  $(this).css("z-index", "10");
  $(this).attr("value", "1");
  
  return;
  }
})
$("p").on("click", function () {
  $(div).animate({width: width, height: height},500);
  $("p").css("display", "none");
  $(div).css("border-top-right-radius", "0px");
  $(div).css("border-bottom-left-radius", "0px");
  $(div).css("z-index", "2");
})


});

