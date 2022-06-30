<?php
    require_once '../config/db_connection.php';
    $products = mysqli_query($connect, "SELECT * FROM `product`");
    $products = mysqli_fetch_all($products);
    foreach ($products as $product)
    {
        echo"
        <tr>
            <td>$product[1]</td>
            <td>$product[2]</td>
            <td>$product[3]</td>
            <td>$product[4]</td>
            <td><a href='commands/updateemployee?id=$product[0]'>Редактировать</a></td>
            <td><a href='commands/deleteteemployee?id=$product[0]'>Удалить</a></td>
        </tr>
        ";
    }
?>