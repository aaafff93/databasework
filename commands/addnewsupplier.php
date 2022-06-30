<?php
    $name = $_POST['name'];
    $company = $_POST['company'];
    $phone_number = $_POST['phone_number'];

    require_once('../config/db_connection.php');
    mysqli_query($connect, "INSERT INTO `supplier` (`supplierID`, `name`, `company`, `phone_number`) 
                            VALUES (NULL, '$name', '$company', '$phone_number');");

?>