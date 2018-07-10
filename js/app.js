$(document).ready(function() {

  var sliderWidth = $(".sliderHead div").width()
  $(".sliderHead div").height(sliderWidth / 4);
  $(".slider").bxSlider({
    auto: true,
    tickerHover: true,
    adaptiveHeight: true,
    pager: false,
    controls: false,
  });

  setInterval(function() {
    var sliderWidth = $(".sliderHead div").width()
    var sliderHeight = $(".sliderHead div").height(sliderWidth / 4);
    var imgHeight = $(".sliderHead img").height()
    var marginTop = (imgHeight - sliderWidth / 4) / -2;
    marginTop += 'px';
    $(".sliderHead img").css('margin-top', marginTop);
  }, 300);
  // ========================== MANAGE DATABASE ==================================

var cptVal = 1;

  $(".cptPos").click(function(event) {
    var parentDivCpt= $(this).parent("section");
    var idParentCpt = parentDivCpt.attr('id');
    var z = idParentCpt.substring(8)
    cptVal++
    $("#" + idParentCpt + " .cpt").val(cptVal)
  });
  $(".cptNeg").click(function(event) {
    var parentDivCpt= $(this).parent("section");
    var idParentCpt = parentDivCpt.attr('id');
    var z = idParentCpt.substring(8)
    if ($("#" + idParentCpt + " .cpt").val() > 0) {
      cptVal--
      $("#" + idParentCpt + " .cpt").val(cptVal)
    }
   });

});
