$(document).ready(function(){

  var sliderWidth=$(".sliderHead div").width()
  $(".sliderHead div").height(sliderWidth/4);
  $(".slider").bxSlider({
    auto:true,
    tickerHover: true,
    adaptiveHeight:true,
    pager:false,
    controls:false,
  });

setInterval(function() {
var sliderWidth=$(".sliderHead div").width()
var sliderHeight=$(".sliderHead div").height(sliderWidth/4);
var imgHeight=$(".sliderHead img").height()
var marginTop = (imgHeight-sliderWidth/4)/-2;
marginTop +='px';
$(".sliderHead img").css('margin-top', marginTop);
},300);








})
