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
  $("#filterMenu").css('left', -filterWidth - 32);

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
      $("#filterMenu").css('left', -filterWidth - 32);
      var filterHeight = $("#menuArticle").height();
      console.log(filterHeight);
      $("#filterMenu").css('height', filterHeight + 'px');
      $("#filterMenu").css('position', 'absolute');
      $("#menuArticle").attr('class', 'column col-12');
      $(".filter").attr('class', 'col filter');
      $(".filter i").css({
        'margin-left': '0',
        'transform': 'initial'
      });
    }
  });

  // ========================== MANAGE DATABASE ==================================
  for (var i = 0; i < 100; i++) {
    $("div#menuArticle div.row div.column.col-12#card-art div.row").append('<div class="column col-12 col-sm-6 col-lg-3 articleVente" id="produit-' + i + '">')
    var catalogProd = $("div.column.articleVente#produit-"+ i);
    catalogProd.append("<h2>Trust Gaming GXT 105 Izza</h2>");
    catalogProd.append('<img class="img-fluid" src="img/souristest.jpg" alt="">')
    catalogProd.append('<span class="prix">90$</span>')
    catalogProd.append('<span class="description">Taillée pour le jeu, et avec un dessus entièrement éclairé</span>')
    catalogProd.append('<a href = "produit-' + i + '"></a>')
    catalogProd.append('<section id="section-' + i + '">')
    var catalogSection = $("#section-" + i)
    catalogSection.append('<button type="button" name="button">+</button>')
    catalogSection.append('<input class="cpt" type="text" name="" value="">')
    catalogSection.append('<button type="button" name="button">-</button>')
    catalogProd.append('<button class="ajoutPanier" type="button" name="button">Ajout au panier</button>')
  }







})
