<?php
    require_once '../config/db_connection.php';
    $suppliers = mysqli_query($connect, "SELECT * FROM `supplier`");
    $suppliers = mysqli_fetch_all($suppliers);
    $tableIndex = 1;

    echo "<tr><th>Имя</th><th>Компания</th><th>Номер телефона</th></tr>";
    foreach ($suppliers as $supplier)
    {
        echo"
        <tr>
            <td>$supplier[1]</td>
            <td>$supplier[2]</td>
            <td>$supplier[3]</td>
            <td>
            <a class='update-and-delete-links' href='#' 
                onclick='updateSupplier($tableIndex, $supplier[0])'>Редактировать</a>
            </td>
            <td><a class='update-and-delete-links' href='#' 
                onclick='deleteSupplier($tableIndex, $supplier[0])'>Удалить</a></td>
        </tr>
        ";
        $tableIndex++;
    }
?>