<?php
        $employeeID = $_POST['employeeID'];
        $name = $_POST['name'];
        $phone_number = $_POST['phone_number'];
        $post = $_POST['post'];
    
        require_once('../config/db_connection.php');
        mysqli_query($connect, "UPDATE `employee` SET `name` = '$name', 
                                                    `phone_number` = '$phone_number', 
                                                    `post` = '$post' 
                                WHERE `employee`.`employeeID` = $employeeID");
    
        //echo $id . '/' . $name . '/' . $phone_number . '/' . $post
    ?>