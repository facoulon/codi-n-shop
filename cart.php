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
        <div id="nav-placeholder" class="col-sm-12">
          <?php include 'nav.php'; ?>
        </div>
      </div>
    </header>
    <main>
      <section id="cart-area">

        <?php
        $total = 0;
        $dbh = new PDO('mysql:host=localhost;dbname=BoutiqueEnLigne', 'admin', 'plop');
        foreach($dbh->query('SELECT * from Ligne WHERE ID_Commande=1' ) as $row) : $Produit = $dbh->query('SELECT * from Produit WHERE id='.$row["ID_Produit"])->fetch()?>
        <div class="row cart-item">
        <div class="col">
        <img src="<?php echo $Produit['thumb'] ?>" alt="Image.<?php echo $Produit['name'] ?>">
           </div>
           <div class="col" class="cart-description">
           <h2><?php echo $Produit['name'] ?></h2>
           <span><?php echo $Produit['price'] ?> €</span>
           </div>
           <div class="col">
           <button class="cptPos" type="button" name="button" value="<?php echo $row['Quantity'] ?>">+</button>
           Quantité:
           <span id="<?php echo $Produit['id'] ?>"><?php echo $row['Quantity'] ?></span>
           <button class="cptNeg" type="button" name="button" value="<?php echo $row['Quantity'] ?>">-</button>
           </div>
           <div class="col">
           prix: <?php echo $Produit['price']*$row['Quantity']?> €
           </div>
         </div>
         <?php $total +=$Produit['price']*$row['Quantity'] ?>
        <?php endforeach;
        $dbh = null;
        ?>
        <div class="col offset-9">Total: <?php echo $total?>$</div> 
      </section>
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
