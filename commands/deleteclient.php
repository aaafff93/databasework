<?php
        $clientID = $_POST['clientID'];
    
        require_once('../config/db_connection.php');
        mysqli_query($connect, "DELETE FROM client WHERE `client`.`clientID` = $clientID");
    ?>