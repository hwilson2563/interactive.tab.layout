$(document).ready(function() {
var width;
var height;
var div;
$(".container div").on("click", function() {
  while($(this).attr("value") !== "1"){
  width = $(this).width();
  height = $(this).height();
  div = this;
  console.log(height);
  console.log(width);
  console.log(div);
  $(this).css("width", "100%");
  $(this).css("height","100%");
  $(this).css("border-radius", "10px");
  $(this).css("z-index", "10");
  $(this).attr("value", "1");
  $("p").css("display","inline-block");
  return;
  }
})
$("p").on("click", function () {
  $(div).css("width", width);
  $(div).css("height", height);
  $("p").css("display", "none");
  $(div).css("border-top-right-radius", "0px");
  $(div).css("border-bottom-left-radius", "0px");
  $(div).css("z-index", "2");

})

});

