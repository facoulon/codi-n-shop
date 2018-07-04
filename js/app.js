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

  var filterWidth = $("#filterMenu").width()
  $("#filterMenu").css('left', -filterWidth-32);

  $(".filter").click(function(event) {
      if ($("#filterMenu").css('position') == 'absolute') {
      $("#filterMenu").css('left', '0');
      $("#filterMenu").css('position', 'relative');
      $("#menuArticle").attr('class', 'column col-12 col-sm-7 col-md-9');
      $(".filter").attr('class', 'filter offset-11 offset-sm-5 offset-md-3');
      $(".filter i").css({
        'margin-left': '0.2em',
        'transform': 'rotate(180deg)'
      });
      } else {
        var filterWidth = $("#filterMenu").width()
        $("#filterMenu").css('left', -filterWidth-32);
        var filterHeight = $("#menuArticle").height();
        console.log(filterHeight);
        $("#filterMenu").css('height', filterHeight+'px');
        $("#filterMenu").css('position', 'absolute');
        $("#menuArticle").attr('class','column col-12');
        $(".filter").attr('class', 'col filter');
        $(".filter i").css({'margin-left':'0',
          'transform':'initial'});
    }
  });






})
