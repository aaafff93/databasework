<?php
        $supplierID = $_POST['supplierID'];
    
        require_once('../config/db_connection.php');
        mysqli_query($connect, "DELETE FROM supplier WHERE `supplier`.`supplierID` = $supplierID");
    ?>