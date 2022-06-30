<?php
    require_once '../config/db_connection.php';
    $clients = mysqli_query($connect, "SELECT * FROM `client`");
    $clients = mysqli_fetch_all($clients);
    $tableIndex = 1;

    echo "<tr><th>Имя</th><th>Компания</th><th>Номер телефона</th></tr>";
    foreach ($clients as $client)
    {
        echo"
        <tr>
            <td>$client[1]</td>
            <td>$client[2]</td>
            <td>$client[3]</td>
            <td>
            <a class='update-and-delete-links' href='#' 
                onclick='updateClient($tableIndex, $client[0])'>Редактировать</a>
            </td>
            <td><a class='update-and-delete-links' href='#' 
                onclick='deleteClient($tableIndex, $client[0])'>Удалить</a></td>
        </tr>
        ";
        $tableIndex++;
    }
?>