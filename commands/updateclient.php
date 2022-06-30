<?php
        $clientID = $_POST['clientID'];
        $name = $_POST['name'];
        $company = $_POST['company'];
        $phone_number = $_POST['phone_number'];
    
        require_once('../config/db_connection.php');
        mysqli_query($connect, "UPDATE `client` SET `name` = '$name', 
                                                    `company` = '$company', 
                                                    `phone_number` = '$phone_number' 
                                WHERE `client`.`clientID` = $clientID");
    ?>