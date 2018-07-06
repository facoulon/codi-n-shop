$(document).ready(function(){
  var url = document.URL;
  var singleUrl = new URL(url);
  var productId = singleUrl.searchParams.get("produit");
  // var GET_PARAM = function(name) {
  //     return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
  // };

  var singleProd = $("#product-area");

  $("#product-area img").attr('src', catalog[productId].pictures[0])
  $("#product-area h1").text(catalog[productId].name)
  $("#product-area span.title").text(catalog[productId].price + '$')
  $("#product-area div.presentation.content").text(catalog[productId].description)
  $("#product-area div.presentation span.quantity").text('Quantité disponibles: ' + catalog[productId].quantity)
})
