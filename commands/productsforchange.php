<?php
    require_once '../config/db_connection.php';
    $products = mysqli_query($connect, "SELECT * FROM `product`");
    $products = mysqli_fetch_all($products);

    echo json_encode($products);

    /*foreach ($employees as $employee)
    {
        echo"
        <tr>
            <td>$employee[1]</td>
            <td>$employee[2]</td>
            <td>$employee[3]</td>
            <td>
            <a class='update-and-delete-links' href='#' 
                onclick='updateEmployee($tableIndex, $employee[0])'>Редактировать</a>
            </td>
            <td><a class='update-and-delete-links' href='#' 
                onclick='deleteEmployee($tableIndex, $employee[0])'>Удалить</a></td>
        </tr>
        ";
        $tableIndex++;
    }*/
?>