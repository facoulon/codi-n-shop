<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="node_modules/bxslider/dist/jquery.bxslider.min.css">
  <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" type="css/navbar-style.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/navbar-style.css">
  <link rel="stylesheet" href="css/temp.css">

  <title>Codi-n-shop</title>
</head>

<body>
  <div class="container-fluid">
    <div class="row">
      <div class="slider sliderHead">
        <div>
          <img src="img/1stSlide-1.jpg" alt="toto">
        </div>
        <div>
          <img src="img/31959565_2053047888300089_6408062291912163328_n.jpg" alt="toto">
        </div>
        <div>
          <img src="img/31959565_2053047888300089_6408062291912163328_n.jpg" alt="toto">
        </div>
      </div>
    </div>
    <header>
      <div class="row" id="header">
        <!--Navigation bar-->
        <div id="nav-placeholder" class="col-sm-12"></div>
        <!--end of Navigation bar-->
      </div>
    </header>

    <main>
        <?php

        $bdd = new PDO('mysql:host=localhost;dbname=BoutiqueEnLigne', 'admin', 'plop');
        $reponse = $bdd->query("SELECT * FROM Produit");
        $productID = $_GET["produit"];
        $product = $reponse->fetch();

        // print_r( $product);

        // $reponse = "SELECT * FROM Produit WHERE id = '1'";
        // echo $reponse;
        ?>
      <div class="row" id="product-area">
        <div class="column col-sm-6">
          <p>Categorie > Sous-catégorie</p>
        <img src="<?php echo $product[thumb]?>" alt="">
        </div>
        <div class="single-product-container column col-sm-6">

          <h1><?php echo $product[name]?></h1>
          <div class="presentation">
            <span class="discount">Prix</span>
            <span class="title"><?php echo $product[price]?>$</span>
          </div>
          <div class="presentation content">
              <p><?php echo $product[description]?></p>
              <span class="quantity"> Quantité disponible:<?php echo $product[quantity]?></span>
          </div>
          <button type="button" name="button">+</button>
          <input class="cpt" type="text" name="" value="">
          <button type="button" name="button">-</button>
          <button class="ajoutPanier" type="button" name="button">Ajouter au panier</button>
        </div>
      </div>
    </main>


    <footer>
      <div class="row" id="footer">
        <!--footer-->
        <div id="footer-placeholder" class="col-sm-12"></div>
        <!--end of footer-->
      </div>
    </footer>
  </div>

  <script src="node_modules/jquery/dist/jquery.min.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="node_modules/bxslider/dist/jquery.bxslider.min.js"></script>
  <script src="js/catalog_x100.js"></script>
  <script src="js/single.js"></script>
  <script src="js/cart.js"></script>
  <script src="js/app.js"></script>
  <script>
    $(function() {
      $("#nav-placeholder").load("nav.html");
      $("#footer-placeholder").load("footer.html");
    });
  </script>
</body>

</html>
