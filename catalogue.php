<?php include 'head.php'; ?>
<body>

  <div class="container-fluid">
    <div class="row">
      <!-- <div class="slider sliderHead">
        <div>
          <img src="img/1stSlide-1.jpg" alt="toto">
        </div>
        <div>
          <img src="img/31959565_2053047888300089_6408062291912163328_n.jpg" alt="toto">
        </div>
        <div>
          <img src="img/31959565_2053047888300089_6408062291912163328_n.jpg" alt="toto">
        </div>
      </div> -->
    </div>
    <header>
      <div class="row" id="header">
        <!--Navigation bar-->
        <div id="nav-placeholder" class="col-sm-12"><?php include 'nav.php'; ?></div>
        <!--end of Navigation bar-->
      </div>
    </header>

    <div class="row" id="main">
      <!-- <div class="column col-12 col-sm-5 col-md-3" id="filterMenu">
        <div class="col filter">
          <i class="fas fa-caret-right"></i>
        </div>
      </div> -->
      <div class="column col-12" id="menuArticle">
        <div class="row ">
          <div class="column col-12" id="card-art">
            <div class="row">
              <?php
              $dbh = new PDO('mysql:host=localhost;dbname=BoutiqueEnLigne', 'admin', 'plop');
              foreach($dbh->query('SELECT * from Produit') as $row) : ?>
              <div class="column col-12 col-sm-6 col-lg-3 articleVente" id="<?php echo $row[0] ?>">

              <h2><?php echo $row['name']?></h2>
                <img class="img-fluid" src="<?php echo $row['thumb'] ?>" alt="">
                <span class="prix"><?php echo $row['price'] ?>$</span>
                <span class="description"><?php echo substr($row['description'], 0 , 100).'...' ?></span>
                <a href = "single.php?produit=<?php echo $row['id'] ?>" class ="btn btn-primary">Voir la fiche</a>
                <form class="" action="catalogue.php" method="post">
                  <input type="hidden" name="produitId" value="<?php echo $row['id'] ?>">
                <button class="ajoutPanier" style="display:block;width:100%;margin-top:1rem;" type="submit" name="submit">Ajout au panier</button>
              </form>
              </div>
            <?php endforeach;
            if(isset($_POST["produitId"])) {
              $ligne = ($dbh->query('SELECT * from Ligne where ID_Produit='.$_POST['produitId'].' AND ID_Commande=1')->fetch());

              if ($ligne == "") {
                echo "Produit Ajouté";
                   $lineADD = $dbh->prepare("INSERT INTO Ligne (ID ,Quantity , ID_Produit, ID_Commande) VALUES ( null, 1 ,:ID_Produit, 1 )");
                   $lineADD->bindParam(':ID_Produit',$_POST["produitId"]);
                   $lineADD->execute();


              } else {
              $quantity = $dbh->query('SELECT * from Ligne where ID_Produit='.$_POST['produitId'].' AND ID_Commande=1')->fetch()['Quantity'];
              $quantity ++;
              $dbh->prepare('UPDATE Ligne SET Quantity='.$quantity.' WHERE ID_Produit='.$_POST['produitId'])->execute();
              echo "quantité augmenté";
            }
              }
            ?>
              <?php
              $dbh = null;
              ?>
              <!-- append by javascript -->
            </div>
          </div>
          <div class="column col-12" id="pub">
            <div class="row">
              <div class="column col-12 col-sm-6 col-lg-3">Publicité</div>
              <div class="column col-12 col-sm-6 col-lg-3">Publicité</div>
              <div class="column col-12 col-sm-6 col-lg-3">Publicité</div>
              <div class="column col-12 col-sm-6 col-lg-3">Publicité</div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
