<?php
echo $_POST['productID'];
echo "string";
$dbh = new PDO('mysql:host=localhost;dbname=BoutiqueEnLigne', 'admin', 'plop');
$quantity = $dbh->query('SELECT * from Ligne where id='.$_POST['productID'])->fetch()['Quantity'];
echo $quantity++;
// $this->$dbh->where(''.$_POST['productID']);
// $this->$dbh->update
// if ($dbh->query('SELECT * from Ligne where ID_Produit='.$_POST['productID'])->fetch()) {
$dbh->prepare('UPDATE Ligne SET Quantity='.$quantity.' WHERE ID_Produit='.$_POST['productID'])->execute();
// echo $stmt->rowCount() . " records UPDATED successfully";
 //}
  ?>
