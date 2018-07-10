$(document).ready(function(){
  $('.ajoutPanier').click(function(event) {
    var checkPanier = sessionStorage.getItem('panier')
    checkPanier = JSON.parse(checkPanier)
    var parentDiv = $(this).parent("div");
    var idParent = parentDiv.attr('id');
    var idProduit = idParent.substring(8)
    var produit = {
      "NumProduit": idProduit,
      "Quantity": 1
    }

    if (checkPanier.length == 0) {
      checkPanier.push(produit)
    } else {
      var index = cherche(checkPanier, idProduit);
      if (index != null) {
        checkPanier[index].Quantity++;
      } else {
        checkPanier.push(produit)
      }
    }
    console.log(checkPanier);


    sessionStorage.setItem('panier', JSON.stringify(checkPanier))
  });

  function cherche(checkPanier, myID) {
    for (var i = 0; i < checkPanier.length; i++) {
      if (myID == checkPanier[i].NumProduit) {
        return i;
      }
    }
    return null;
  }

  var displayPanier = sessionStorage.getItem('panier')
  displayPanier = JSON.parse(displayPanier)
  console.log(displayPanier);

  var total = 0;
  for (var i = 0; i < displayPanier.length; i++) {
    nProd = displayPanier[i].NumProduit;
    console.log(nProd);
    $("#cart-area").append(
      '<div class="row cart-item">\
        <div class="col">\
          <img src="'+ catalog[nProd].thumb +'" alt="">\
        </div>\
        <div class="col" class="cart-description">\
          <h2>'+ catalog[nProd].name +'</h2>\
          <span>'+ catalog[nProd].price +' €</span>\
        </div>\
        <div class="col">\
        Quantity : <button class="cptPosCart" type="button" name="button">+</button> <a href="#" id="username" data-type="text" data-pk="1" data-url="/post" data-title="Enter username">'+ displayPanier[i].Quantity +'</a>\
        <button class="cptNegCart" type="button" name="button">-</button>\
        </div>\
        <div class="col">\
          prix: '+ catalog[nProd].price*displayPanier[i].Quantity +' €\
        </div>\
      </div>'
    )
    total += catalog[nProd].price*displayPanier[i].Quantity;
    console.log(total);
  }
  $("#cart-area").append(
    '<div class="row">\
      <div class="col offset-9">total: '+ total +' €</div>\
    </div>'
  )
  // turn to inline mode
  $.fn.editable.defaults.mode = 'inline';
    $('#username').editable({
    type: 'text',
    pk: 1,
    url: '/post',
    title: 'Enter username'
});

var cptVal = 1;

  // $(".cptPos").click(function(event) {
  //   var parentDivCpt= $(this).parent("section");
  //   var idParentCpt = parentDivCpt.attr('id');
  //   var z = idParentCpt.substring(8)
  //   cptVal++
  //   $("#" + idParentCpt + " .cpt").val(cptVal)
  // });
  // $(".cptNeg").click(function(event) {
  //   var parentDivCpt= $(this).parent("section");
  //   var idParentCpt = parentDivCpt.attr('id');
  //   var z = idParentCpt.substring(8)
  //   if ($("#" + idParentCpt + " .cpt").val() > 0) {
  //     cptVal--
  //     $("#" + idParentCpt + " .cpt").val(cptVal)
  //   }

  $(".cptPosCart").click(function(event) {
    var parentDivCpt= $(this).parent("div");
    var h2Div = parentDivCpt.prev("div")
    // var Nproduct = $(h2Div "h2")
    var product =h2Div.children('h2').text();
    var Nproduct = product.substr(product.indexOf(" ") + 1)
    displayPanier[Nproduct].Quantity++
    $(this).next().text(displayPanier[Nproduct].Quantity)
   });





})
