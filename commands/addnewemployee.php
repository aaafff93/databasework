<?php
    $name = $_POST['name'];
    $phone_number = $_POST['phone_number'];
    $post = $_POST['post'];

    require_once('../config/db_connection.php');
    mysqli_query($connect, "INSERT INTO `employee` (`employeeID`, `name`, `phone_number`, `post`) 
                            VALUES (NULL, '$name', '$phone_number', '$post');");

    //header('Location: /');
?>