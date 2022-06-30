<?php
    require_once '../config/db_connection.php';
    $sales = mysqli_query($connect, "SELECT * FROM `sale`");
    $sales = mysqli_fetch_all($sales);
    foreach ($sales as $sale)
    {
        $product = mysqli_query($connect, "SELECT name FROM `product` WHERE productID=$sale[7]");
        $product = mysqli_fetch_array($product)[0];
        echo"
        <tr>
            <td>$product</td>
            <td>$sale[1]</td>
            <td>$sale[2]</td>
            <td>$sale[3]</td>
            <td>$sale[4]</td>
            <td><a href='commands/updateemployee?id=$sale[0]'>Редактировать</a></td>
            <td><a href='commands/deleteteemployee?id=$sale[0]'>Удалить</a></td>
        </tr>
        ";
    }
?>