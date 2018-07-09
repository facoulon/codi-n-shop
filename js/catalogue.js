$(document).ready(function(){
  for (var i = 0; i < catalog.length; i++) {
    $("div#menuArticle div.row div.column.col-12#card-art div.row").append('<div class="column col-12 col-sm-6 col-lg-3 articleVente" id="produit-' + i + '">')
    var catalogProd = $("div.column.articleVente#produit-" + i);
    catalogProd.append("<h2>" + catalog[i].name + "</h2>");
    catalogProd.append('<img class="img-fluid" src="' + catalog[i].thumb + '" alt="">')
    catalogProd.append('<span class="prix">' + catalog[i].price + '$</span>')
    catalogProd.append('<span class="description">' + catalog[i].description.substring(0, 100) + '...</span>')
    catalogProd.append('<a href = "single.html?produit=' + i + '" class ="btn btn-primary">Voir la fiche</a>')
    catalogProd.append('<section id="section-' + i + '">')
    var catalogSection = $("#section-" + i)
    catalogSection.append('<button class="cptPos" type="button" name="button">+</button>')
    catalogSection.append('<input class="cpt" type="text" name="" value="1">')
    catalogSection.append('<button class="cptNeg" type="button" name="button">-</button>')
    catalogProd.append('<button class="ajoutPanier" type="button" name="button">Ajout au panier</button>')
  }
  var panier = [];
  sessionStorage.setItem('panier', JSON.stringify(panier))








  // ===================================== BARRE LATERAL ============================
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

  var mainBot = $("#main").height()
  // var filterPos = $('.filter').position();
  setInterval(function() {
    // console.log($(window).scrollTop());
    // console.log(mainBot );
    // var filterBot = $(window).scrollTop();
    if ($(window).scrollTop() > mainBot) {
      $('.filter').hide
    } else {
      $('.filter').show
    }
  }, 300);
  // ===================================== BARRE LATERAL ============================



});
