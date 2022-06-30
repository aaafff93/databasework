<?php
    require_once '../config/db_connection.php';
    $purchases = mysqli_query($connect, "SELECT * FROM `purchase`");
    $purchases = mysqli_fetch_all($purchases);
    $tableIndex = 1;

    echo "<tr><th>Товар</th><th>Дата</th><th>Цена</th><th>Количество</th><th>Ед. измерения</th><th>Общая цена</th></tr>";
    foreach ($purchases as $purchase)
    {
        $product = mysqli_query($connect, "SELECT name FROM `product` WHERE productID=$purchase[8]");
        $product = mysqli_fetch_array($product)[0];
        echo"
        <tr>
            <td>$product</td>
            <td>$purchase[1]</td>
            <td>$purchase[2]</td>
            <td>$purchase[3]</td>
            <td>$purchase[4]</td>
            <td>$purchase[5]</td>
            <td>
            <a class='update-and-delete-links' href='#' 
                onclick='updateClient($tableIndex, $purchase[0])'>Редактировать</a>
            </td>
            <td><a class='update-and-delete-links' href='#' 
                onclick='deleteClient($tableIndex, $purchase[0])'>Удалить</a></td>
        </tr>
        ";
        $tableIndex++;
    }
?>