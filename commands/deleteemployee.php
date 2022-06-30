<?php
        $employeeID = $_POST['employeeID'];
    
        require_once('../config/db_connection.php');
        mysqli_query($connect, "DELETE FROM employee WHERE `employee`.`employeeID` = $employeeID");
    ?>