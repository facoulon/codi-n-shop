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
    <header>
      <div class="row" id="slider">
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
      <div class="row" id="header">
        <!--Navigation bar-->
        <div id="nav-placeholder" class="column col-sm-12"></div>
        <!--end of Navigation bar-->
      </div>
    </header>
    <main>
      <div class="row" id="main">
        <div class="column col-sm-8">

        </div>
        <div class="column col-sm-4">

        </div>
        <div class="column col-sm-12">

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
  <script>
  $(function() {
    $("#nav-placeholder").load("nav.html");
    $("#footer-placeholder").load("footer.html");
  });
  </script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="node_modules/bxslider/dist/jquery.bxslider.min.js"></script>
  <script src="js/catalog_x100.js"></script>
  <script src="js/app.js"></script>
</body>

</html>
