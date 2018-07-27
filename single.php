<?php include 'head.php'; ?>
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
        <div id="nav-placeholder" class="col-sm-12"><?php include 'nav.php'; ?></div>
        <!--end of Navigation bar-->
      </div>
    </header>

    <main>
        <?php

        $bdd = new PDO('mysql:host=localhost;dbname=BoutiqueEnLigne', 'admin', 'plop');
        $productID = $_GET["produit"];
        $reponse = $bdd->query("SELECT * FROM Produit WHERE id=$productID");
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
          <button class="ajoutPanier" value="<?php echo $product[id] ?>" type="button" name="button">Ajouter au panier</button>
        </div>
      </div>
    </main>


    <footer>
      <div class="row" id="footer">
        <!--footer-->
        <div id="footer-placeholder" class="col-sm-12">
          <?php include 'footer.php'; ?>
        </div>
        <!--end of footer-->
      </div>
    </footer>
  </div>

<?php include 'script.php'; ?>
</body>

</html>
