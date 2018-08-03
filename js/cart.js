$(document).ready(function() {
  var cart = {}
  loadCart();
  // displayCart();

  $(".ajoutPanier").click(function() {
    var productId = $(this).val();
    if (cart[productId]) {
      cart[productId]++;
    } else {
      cart[productId]=1;
    }
    saveCart();
    // displayCart();
  })


  function saveCart() {
    var cart_json = JSON.stringify(cart);
    sessionStorage.setItem("cart", cart_json);
  }

  function loadCart() {
    var cart_json = sessionStorage.getItem("cart");
    cart = JSON.parse(cart_json) || {};
  }


  // $('.cptNeg').click(function(event) {
  //   $(this).
  // });


  // function displayCart() {
  //   $("#cart-area").html("");
  //   var total = 0;
  //   for (productId in cart) {
  //     if (cart[productId] > 0) {
  //       $("#cart-area").append(
  //         '<div class="row cart-item">\
  //         <div class="col">\
  //         <img src="'+catalog[productId].thumb+'" alt="">\
  //         </div>\
  //         <div class="col" class="cart-description">\
  //         <h2>'+catalog[productId].name+'</h2>\
  //         <span>'+catalog[productId].price+' €</span>\
  //         </div>\
  //         <div class="col">\
  //         <button class="cptPos" type="button" name="button" value="'+productId+'">+</button>\
  //         Quantité: \
  //         <span id="'+productId+'">'+cart[productId]+'</span>\
  //         <button class="cptNeg" type="button" name="button" value="'+productId+'">-</button>\
  //         </div>\
  //         <div class="col">\
  //         prix: '+cart[productId]*catalog[productId].price+' €\
  //         </div>\
  //         </div>'
  //       )
  //     }
  //     // var totalProd = cart[productId]*catalog[productId].price;
  //     total += cart[productId]*catalog[productId].price;
  //   }
  //   $("#cart-area").append(
  //     '<div class="col offset-9">Total: '+total+'$</div>'
  //   )
  //
  //   $(".cptPos").click(function() {
  //     loadCart();
  //     productId = $(this).val();
  //     cart[productId]++;
  //     saveCart();
  //     displayCart();
  //   })
  //   $(".cptNeg").click(function() {
  //     loadCart();
  //     productId = $(this).val();
  //     if (cart[productId] > 0) {
  //       cart[productId]--;
  //       saveCart();
  //       displayCart();
  //     }
  //   })
  // }


});
